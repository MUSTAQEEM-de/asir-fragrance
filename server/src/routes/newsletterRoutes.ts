import { Router } from 'express';
import * as newsletterController from '../controllers/newsletterController';
import { requireAuth, requireAdmin } from '../middleware/auth';

const router = Router();

router.post('/subscribe', newsletterController.subscribe);
router.get('/subscribers', requireAuth, requireAdmin, newsletterController.listSubscribers);

export default router;
