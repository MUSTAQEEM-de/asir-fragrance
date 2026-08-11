// One-off verification harness using an in-memory MongoDB, since this sandbox
// cannot run Docker Desktop. Not part of the shipped app — safe to delete.
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { createApp } from '../app';
import { Product } from '../models/Product';
import { PRODUCTS } from '../../../src/data/products';
import http from 'http';

async function run() {
  const mongod = await MongoMemoryServer.create();
  await mongoose.connect(mongod.getUri());

  for (const p of PRODUCTS.slice(0, 3)) {
    await Product.create({
      slug: p.slug,
      name: p.name,
      category: p.category,
      gender: p.gender,
      shortDescription: p.shortDescription,
      fullDescription: p.fullDescription,
      variants: p.variants,
      rating: p.rating,
      reviewCount: p.reviewCount,
      image: p.image,
      notes: p.notes,
      longevity: p.longevity,
      sillage: p.sillage,
      moods: p.moods,
      occasions: p.occasions,
      styles: p.styles,
      isActive: true
    });
  }

  const app = createApp();
  const server = http.createServer(app);
  await new Promise<void>((resolve) => server.listen(0, resolve));
  const port = (server.address() as { port: number }).port;
  const base = `http://localhost:${port}/api`;

  const fail = (msg: string): never => {
    throw new Error('SMOKE TEST FAILED: ' + msg);
  };

  // 1. health check
  const health = await fetch(`${base}/health`).then((r) => r.json());
  if (!health.success) fail('health check');
  console.log('[ok] health check');

  // 2. list products
  const list = await fetch(`${base}/products`).then((r) => r.json());
  if (!list.success || list.data.length !== 3) fail('product list count = ' + list.data?.length);
  console.log('[ok] product list returns', list.data.length, 'products');

  const oudElite = list.data.find((p: { slug: string }) => p.slug === 'oud-elite');
  if (!oudElite) fail('oud-elite not found');
  const variant10ml = oudElite.variants.find((v: { size: string }) => v.size === '10ml');
  if (variant10ml.priceINR !== 80) fail('oud-elite 10ml price mismatch: ' + variant10ml.priceINR);
  console.log('[ok] oud-elite 10ml price = ₹80 (matches source artwork)');

  // 3. CRITICAL: order creation ignores client-supplied price, uses DB price
  const orderRes = await fetch(`${base}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      items: [
        // maliciously trying to pass price: 1 — must be ignored by the server
        { productId: oudElite.id, size: '10ml', quantity: 2, price: 1 }
      ],
      shippingAddress: {
        fullName: 'Test Buyer',
        phone: '9999999999',
        email: 'buyer@example.com',
        addressLine: '123 Test Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        postalCode: '400001',
        country: 'India'
      }
    })
  }).then((r) => r.json());

  if (!orderRes.success) fail('order creation failed: ' + JSON.stringify(orderRes));
  const expectedSubtotal = 80 * 2; // 160, NOT price:1 * 2 = 2
  if (orderRes.data.subtotalINR !== expectedSubtotal) {
    fail(`price tampering NOT blocked! subtotal = ${orderRes.data.subtotalINR}, expected ${expectedSubtotal}`);
  }
  console.log('[ok] order subtotal = ₹' + orderRes.data.subtotalINR, '— client price:1 tampering was ignored');
  console.log('[ok] order total (with shipping) = ₹' + orderRes.data.totalINR);
  console.log('[ok] order number =', orderRes.data.orderNumber);

  // 4. stock decremented
  const productAfter = await fetch(`${base}/products/${oudElite.id}`).then((r) => r.json());
  const variantAfter = productAfter.data.variants.find((v: { size: string }) => v.size === '10ml');
  if (variantAfter.stock !== 48) fail('stock not decremented correctly: ' + variantAfter.stock);
  console.log('[ok] stock decremented from 50 to', variantAfter.stock);

  // 5. insufficient stock rejected
  const overOrder = await fetch(`${base}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      items: [{ productId: oudElite.id, size: '10ml', quantity: 9999 }],
      shippingAddress: {
        fullName: 'Test Buyer',
        phone: '9999999999',
        email: 'buyer@example.com',
        addressLine: '123 Test Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        postalCode: '400001',
        country: 'India'
      }
    })
  }).then((r) => r.json());
  if (overOrder.success) fail('over-stock order was NOT rejected');
  console.log('[ok] over-stock order correctly rejected:', overOrder.message);

  // 6. auth register/login/me
  const registerRes = await fetch(`${base}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Test User', email: 'test@example.com', password: 'password123' })
  });
  const registerBody = await registerRes.json();
  if (!registerBody.success) fail('register failed: ' + JSON.stringify(registerBody));
  const cookie = registerRes.headers.get('set-cookie');
  console.log('[ok] register succeeded, role =', registerBody.data.role);

  const meRes = await fetch(`${base}/auth/me`, { headers: { Cookie: cookie || '' } }).then((r) => r.json());
  if (!meRes.success || meRes.data.email !== 'test@example.com') fail('me endpoint failed');
  console.log('[ok] /auth/me returns authenticated user');

  // 7. newsletter subscribe
  const newsRes = await fetch(`${base}/newsletter/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'subscriber@example.com' })
  }).then((r) => r.json());
  if (!newsRes.success) fail('newsletter subscribe failed');
  console.log('[ok] newsletter subscribe works');

  server.close();
  await mongoose.disconnect();
  await mongod.stop();
  console.log('\nALL SMOKE TESTS PASSED');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
