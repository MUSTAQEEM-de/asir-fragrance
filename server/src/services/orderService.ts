import { Product } from '../models/Product';
import { Order, OrderDocument, OrderStatus } from '../models/Order';
import { ApiError } from '../utils/ApiError';
import { generateOrderNumber } from '../utils/orderNumber';
import { Types } from 'mongoose';

export interface OrderLineInput {
  productId: string;
  size: string;
  quantity: number;
}

export interface CreateOrderInput {
  items: OrderLineInput[];
  shippingAddress: OrderDocument['shippingAddress'];
  customerId?: string;
}

// Placeholder shipping/tax policy — flagged pending confirmed business rules.
const FREE_SHIPPING_THRESHOLD_INR = 500;
const SHIPPING_FEE_INR = 49;
const TAX_RATE = 0; // GST not yet configured — do not invent a rate.

export async function createOrder(input: CreateOrderInput) {
  if (!input.items?.length) throw ApiError.badRequest('Order must contain at least one item');

  const lineItems = [];
  let subtotalINR = 0;

  // SECURITY: price and stock are always re-derived from the database here.
  // The client never supplies price — any price field in the request body is ignored.
  for (const line of input.items) {
    if (!Types.ObjectId.isValid(line.productId)) {
      throw ApiError.badRequest(`Invalid product id: ${line.productId}`);
    }
    const product = await Product.findOne({ _id: line.productId, isActive: true });
    if (!product) throw ApiError.notFound(`Product not found: ${line.productId}`);

    const variant = product.variants.find((v) => v.size === line.size);
    if (!variant) throw ApiError.badRequest(`Size "${line.size}" is not available for ${product.name}`);

    if (line.quantity < 1) throw ApiError.badRequest('Quantity must be at least 1');
    if (variant.stock < line.quantity) {
      throw ApiError.badRequest(`Insufficient stock for ${product.name} (${line.size}). Only ${variant.stock} left.`);
    }

    const lineTotal = variant.priceINR * line.quantity;
    subtotalINR += lineTotal;

    lineItems.push({
      product: product._id,
      productName: product.name,
      productImage: product.image,
      size: line.size,
      quantity: line.quantity,
      priceINR: variant.priceINR
    });
  }

  const shippingFeeINR = subtotalINR >= FREE_SHIPPING_THRESHOLD_INR ? 0 : SHIPPING_FEE_INR;
  const taxINR = Math.round(subtotalINR * TAX_RATE);
  const totalINR = subtotalINR + shippingFeeINR + taxINR;

  // Decrement stock atomically per line item.
  for (const line of input.items) {
    await Product.updateOne(
      { _id: line.productId, 'variants.size': line.size },
      { $inc: { 'variants.$.stock': -line.quantity } }
    );
  }

  const order = await Order.create({
    orderNumber: generateOrderNumber(),
    customer: input.customerId,
    items: lineItems,
    shippingAddress: input.shippingAddress,
    subtotalINR,
    shippingFeeINR,
    taxINR,
    totalINR,
    paymentMethod: 'cod',
    paymentStatus: 'pending',
    status: 'pending'
  });

  return order;
}

export async function getOrderById(id: string) {
  const order = await Order.findById(id);
  if (!order) throw ApiError.notFound('Order not found');
  return order;
}

export async function listOrders(filters: { email?: string; status?: OrderStatus } = {}) {
  const query: Record<string, unknown> = {};
  if (filters.email) query['shippingAddress.email'] = filters.email.toLowerCase();
  if (filters.status) query.status = filters.status;
  return Order.find(query).sort({ createdAt: -1 });
}

export async function updateOrderStatus(id: string, status: OrderStatus) {
  const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
  if (!order) throw ApiError.notFound('Order not found');
  return order;
}
