import { Router } from 'express';
import * as orderController from '../controllers/orderController';
import { requireAuth, requireAdmin } from '../middleware/auth';

const router = Router();

router.post('/', orderController.createOrder);
router.get('/:id', orderController.getOrderById);
router.get('/', requireAuth, requireAdmin, orderController.listOrders);
router.patch('/:id/status', requireAuth, requireAdmin, orderController.updateOrderStatus);

export default router;
