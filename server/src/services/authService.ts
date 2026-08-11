import bcrypt from 'bcryptjs';
import { Customer } from '../models/Customer';
import { ApiError } from '../utils/ApiError';

export async function registerCustomer(name: string, email: string, password: string, phone?: string) {
  const existing = await Customer.findOne({ email: email.toLowerCase() });
  if (existing) throw ApiError.conflict('An account with this email already exists');

  const passwordHash = await bcrypt.hash(password, 12);
  const customer = await Customer.create({ name, email: email.toLowerCase(), passwordHash, phone });
  return customer;
}

export async function authenticateCustomer(email: string, password: string) {
  const customer = await Customer.findOne({ email: email.toLowerCase() }).select('+passwordHash');
  if (!customer) throw ApiError.unauthorized('Invalid email or password');

  const valid = await customer.comparePassword(password);
  if (!valid) throw ApiError.unauthorized('Invalid email or password');

  return customer;
}

export async function getCustomerById(id: string) {
  const customer = await Customer.findById(id);
  if (!customer) throw ApiError.notFound('Account not found');
  return customer;
}
