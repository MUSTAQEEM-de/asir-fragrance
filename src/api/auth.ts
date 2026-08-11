import { apiFetch } from './client';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: 'customer' | 'admin';
}

export function registerAccount(name: string, email: string, password: string, phone?: string): Promise<AuthUser> {
  return apiFetch<AuthUser>('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password, phone })
  });
}

export function loginAccount(email: string, password: string): Promise<AuthUser> {
  return apiFetch<AuthUser>('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
}

export function logoutAccount(): Promise<null> {
  return apiFetch<null>('/auth/logout', { method: 'POST' });
}

export function fetchCurrentUser(): Promise<AuthUser> {
  return apiFetch<AuthUser>('/auth/me');
}
