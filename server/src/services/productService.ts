import { Product, ProductDocument } from '../models/Product';
import { ApiError } from '../utils/ApiError';

export interface ProductListFilters {
  category?: string;
  gender?: string;
  search?: string;
}

export async function listProducts(filters: ProductListFilters = {}) {
  const query: Record<string, unknown> = { isActive: true };

  if (filters.category && filters.category !== 'All') {
    query.category = filters.category;
  }
  if (filters.gender && filters.gender !== 'All') {
    query.gender = filters.gender;
  }
  if (filters.search) {
    const regex = new RegExp(filters.search.trim(), 'i');
    query.$or = [{ name: regex }, { shortDescription: regex }, { category: regex }];
  }

  return Product.find(query).sort({ createdAt: -1 });
}

export async function getProductById(id: string) {
  const product = await Product.findOne({ _id: id, isActive: true });
  if (!product) throw ApiError.notFound('Product not found');
  return product;
}

export async function getProductBySlug(slug: string) {
  const product = await Product.findOne({ slug, isActive: true });
  if (!product) throw ApiError.notFound('Product not found');
  return product;
}

export async function getFeaturedProducts() {
  return Product.find({ isFeatured: true, isActive: true });
}

export async function getBestsellerProducts() {
  return Product.find({ isBestseller: true, isActive: true });
}

export async function getProductsByCategory(category: string) {
  return Product.find({ category, isActive: true });
}

export async function createProduct(data: Partial<ProductDocument>) {
  return Product.create(data);
}

export async function updateProduct(id: string, data: Partial<ProductDocument>) {
  const product = await Product.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  if (!product) throw ApiError.notFound('Product not found');
  return product;
}

export async function deleteProduct(id: string) {
  // Soft delete — preserves referential integrity for historical orders.
  const product = await Product.findByIdAndUpdate(id, { isActive: false }, { new: true });
  if (!product) throw ApiError.notFound('Product not found');
  return product;
}
