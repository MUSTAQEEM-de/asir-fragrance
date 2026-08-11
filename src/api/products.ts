import { apiFetch } from './client';
import { Product } from '../types';

export function fetchProducts(): Promise<Product[]> {
  return apiFetch<Product[]>('/products');
}

export function fetchProductById(id: string): Promise<Product> {
  return apiFetch<Product>(`/products/${id}`);
}

export function fetchProductBySlug(slug: string): Promise<Product> {
  return apiFetch<Product>(`/products/slug/${slug}`);
}
