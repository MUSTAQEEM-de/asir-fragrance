import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import * as orderService from '../services/orderService';
import { ApiError } from '../utils/ApiError';

export const createOrder = asyncHandler(async (req: Request, res: Response) => {
  const { items, shippingAddress } = req.body;

  if (!Array.isArray(items) || items.length === 0) {
    throw ApiError.badRequest('items must be a non-empty array');
  }
  const required = ['fullName', 'phone', 'email', 'addressLine', 'city', 'state', 'postalCode'];
  for (const field of required) {
    if (!shippingAddress?.[field]) throw ApiError.badRequest(`shippingAddress.${field} is required`);
  }

  const order = await orderService.createOrder({
    items: items.map((i: { productId: string; size: string; quantity: number }) => ({
      productId: i.productId,
      size: i.size,
      quantity: i.quantity
    })),
    shippingAddress,
    customerId: req.user?.id
  });

  res.status(201).json({ success: true, data: order });
});

export const getOrderById = asyncHandler(async (req: Request, res: Response) => {
  const order = await orderService.getOrderById(req.params.id);
  res.json({ success: true, data: order });
});

export const listOrders = asyncHandler(async (req: Request, res: Response) => {
  const { email, status } = req.query;
  const orders = await orderService.listOrders({
    email: email as string,
    status: status as never
  });
  res.json({ success: true, data: orders });
});

export const updateOrderStatus = asyncHandler(async (req: Request, res: Response) => {
  const { status } = req.body;
  const allowed = ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'];
  if (!allowed.includes(status)) throw ApiError.badRequest(`status must be one of: ${allowed.join(', ')}`);
  const order = await orderService.updateOrderStatus(req.params.id, status);
  res.json({ success: true, data: order });
});
