import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/ApiError';
import { isProduction } from '../config/env';

export function notFoundHandler(req: Request, res: Response) {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: unknown, req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ success: false, message: err.message });
    return;
  }

  const isValidationError = (err as { name?: string })?.name === 'ValidationError';
  if (isValidationError) {
    res.status(400).json({ success: false, message: (err as Error).message });
    return;
  }

  const isDuplicateKey = (err as { code?: number })?.code === 11000;
  if (isDuplicateKey) {
    res.status(409).json({ success: false, message: 'A record with these details already exists' });
    return;
  }

  console.error(err);
  res.status(500).json({
    success: false,
    message: 'Something went wrong. Please try again shortly.',
    ...(isProduction ? {} : { detail: err instanceof Error ? err.message : String(err) })
  });
}
