const API_BASE_URL: string = (import.meta as unknown as { env: Record<string, string> }).env.VITE_API_URL || 'http://localhost:5000/api';

export class ApiRequestError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

interface ApiEnvelope<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {})
    },
    ...options
  });

  let body: ApiEnvelope<T> | undefined;
  try {
    body = await res.json();
  } catch {
    // no JSON body
  }

  if (!res.ok || !body?.success) {
    throw new ApiRequestError(res.status, body?.message || 'Something went wrong. Please try again shortly.');
  }

  return body.data as T;
}
