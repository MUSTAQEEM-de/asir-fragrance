import { apiFetch } from './client';
import { CartItem } from '../types';

export interface ShippingAddressInput {
  fullName: string;
  phone: string;
  email: string;
  addressLine: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface OrderResult {
  id: string;
  orderNumber: string;
  items: Array<{ productName: string; size: string; quantity: number; priceINR: number }>;
  subtotalINR: number;
  shippingFeeINR: number;
  taxINR: number;
  totalINR: number;
  status: string;
  shippingAddress: ShippingAddressInput;
}

// Only productId/size/quantity are sent — price is never trusted from the client.
export function createOrder(cart: CartItem[], shippingAddress: ShippingAddressInput): Promise<OrderResult> {
  return apiFetch<OrderResult>('/orders', {
    method: 'POST',
    body: JSON.stringify({
      items: cart.map((item) => ({
        productId: item.product.id,
        size: item.selectedSize,
        quantity: item.quantity
      })),
      shippingAddress
    })
  });
}

export function fetchOrderById(id: string): Promise<OrderResult> {
  return apiFetch<OrderResult>(`/orders/${id}`);
}
