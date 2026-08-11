import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import * as authService from '../services/authService';
import { signToken, setAuthCookie, clearAuthCookie } from '../utils/token';
import { ApiError } from '../utils/ApiError';

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password, phone } = req.body;
  if (!name || !email || !password) throw ApiError.badRequest('name, email and password are required');
  if (password.length < 8) throw ApiError.badRequest('Password must be at least 8 characters');

  const customer = await authService.registerCustomer(name, email, password, phone);
  const token = signToken({ id: customer.id, role: customer.role });
  setAuthCookie(res, token);

  res.status(201).json({
    success: true,
    data: { id: customer.id, name: customer.name, email: customer.email, role: customer.role }
  });
});

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) throw ApiError.badRequest('email and password are required');

  const customer = await authService.authenticateCustomer(email, password);
  const token = signToken({ id: customer.id, role: customer.role });
  setAuthCookie(res, token);

  res.json({
    success: true,
    data: { id: customer.id, name: customer.name, email: customer.email, role: customer.role }
  });
});

export const logout = asyncHandler(async (_req: Request, res: Response) => {
  clearAuthCookie(res);
  res.json({ success: true, data: null });
});

export const me = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user) throw ApiError.unauthorized();
  const customer = await authService.getCustomerById(req.user.id);
  res.json({
    success: true,
    data: { id: customer.id, name: customer.name, email: customer.email, role: customer.role }
  });
});
