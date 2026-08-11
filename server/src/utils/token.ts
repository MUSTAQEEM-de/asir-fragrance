import jwt from 'jsonwebtoken';
import { Response } from 'express';
import { env, isProduction } from '../config/env';

export interface TokenPayload {
  id: string;
  role: 'customer' | 'admin';
}

export function signToken(payload: TokenPayload): string {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: env.jwtExpiresIn as jwt.SignOptions['expiresIn'] });
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, env.jwtSecret) as TokenPayload;
}

const COOKIE_NAME = 'asir_token';

export function setAuthCookie(res: Response, token: string): void {
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
}

export function clearAuthCookie(res: Response): void {
  res.clearCookie(COOKIE_NAME);
}

export { COOKIE_NAME };
