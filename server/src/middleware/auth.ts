import { Request, Response, NextFunction } from 'express';
import { verifyToken, COOKIE_NAME } from '../utils/token';
import { ApiError } from '../utils/ApiError';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: { id: string; role: 'customer' | 'admin' };
    }
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.[COOKIE_NAME] || req.headers.authorization?.replace('Bearer ', '');
  if (!token) return next(ApiError.unauthorized('Please sign in to continue'));

  try {
    const payload = verifyToken(token);
    req.user = { id: payload.id, role: payload.role };
    next();
  } catch {
    next(ApiError.unauthorized('Session expired, please sign in again'));
  }
}

export function requireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.user || req.user.role !== 'admin') {
    return next(ApiError.forbidden('Admin access required'));
  }
  next();
}
