import { apiFetch } from './client';

export function subscribeToNewsletter(email: string): Promise<{ email: string }> {
  return apiFetch('/newsletter/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email })
  });
}
