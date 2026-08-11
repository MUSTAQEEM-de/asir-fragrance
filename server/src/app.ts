import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import { env } from './config/env';
import { notFoundHandler, errorHandler } from './middleware/errorHandler';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import authRoutes from './routes/authRoutes';
import newsletterRoutes from './routes/newsletterRoutes';

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(
    cors({
      origin: env.clientUrl,
      credentials: true
    })
  );
  app.use(express.json({ limit: '1mb' }));
  app.use(cookieParser());
  app.use(mongoSanitize());

  app.get('/api/health', (_req, res) => {
    res.json({ success: true, data: { status: 'ok' } });
  });

  app.use('/api/products', productRoutes);
  app.use('/api/orders', orderRoutes);
  app.use('/api/auth', authRoutes);
  app.use('/api/newsletter', newsletterRoutes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
