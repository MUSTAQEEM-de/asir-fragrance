import { Router } from 'express';
import * as productController from '../controllers/productController';
import { requireAuth, requireAdmin } from '../middleware/auth';

const router = Router();

router.get('/featured', productController.getFeaturedProducts);
router.get('/bestsellers', productController.getBestsellerProducts);
router.get('/search', productController.searchProducts);
router.get('/slug/:slug', productController.getProductBySlug);
router.get('/category/:category', productController.getProductsByCategory);
router.get('/:id', productController.getProductById);
router.get('/', productController.getProducts);

router.post('/', requireAuth, requireAdmin, productController.createProduct);
router.put('/:id', requireAuth, requireAdmin, productController.updateProduct);
router.delete('/:id', requireAuth, requireAdmin, productController.deleteProduct);

export default router;
