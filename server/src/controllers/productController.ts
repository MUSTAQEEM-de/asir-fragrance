import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import * as productService from '../services/productService';

export const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const { category, gender, q } = req.query;
  const products = await productService.listProducts({
    category: category as string,
    gender: gender as string,
    search: q as string
  });
  res.json({ success: true, data: products });
});

export const getProductById = asyncHandler(async (req: Request, res: Response) => {
  const product = await productService.getProductById(req.params.id);
  res.json({ success: true, data: product });
});

export const getProductBySlug = asyncHandler(async (req: Request, res: Response) => {
  const product = await productService.getProductBySlug(req.params.slug);
  res.json({ success: true, data: product });
});

export const getFeaturedProducts = asyncHandler(async (_req: Request, res: Response) => {
  const products = await productService.getFeaturedProducts();
  res.json({ success: true, data: products });
});

export const getBestsellerProducts = asyncHandler(async (_req: Request, res: Response) => {
  const products = await productService.getBestsellerProducts();
  res.json({ success: true, data: products });
});

export const getProductsByCategory = asyncHandler(async (req: Request, res: Response) => {
  const products = await productService.getProductsByCategory(req.params.category);
  res.json({ success: true, data: products });
});

export const searchProducts = asyncHandler(async (req: Request, res: Response) => {
  const products = await productService.listProducts({ search: req.query.q as string });
  res.json({ success: true, data: products });
});

export const createProduct = asyncHandler(async (req: Request, res: Response) => {
  const product = await productService.createProduct(req.body);
  res.status(201).json({ success: true, data: product });
});

export const updateProduct = asyncHandler(async (req: Request, res: Response) => {
  const product = await productService.updateProduct(req.params.id, req.body);
  res.json({ success: true, data: product });
});

export const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
  const product = await productService.deleteProduct(req.params.id);
  res.json({ success: true, data: product });
});
