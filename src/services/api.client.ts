import { session } from '../utils/storage';

const API_URL = import.meta.env.PUBLIC_API_URL ?? 'http://localhost:3000';

export async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = session.get();
  const headers = new Headers(options.headers);
  headers.set('Content-Type', 'application/json');
  if (token) headers.set('Authorization', `Bearer ${token}`);

  const response = await fetch(`${API_URL}${path}`, { ...options, headers });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401) session.clear();
    throw new Error(body.error ?? 'No fue posible completar la solicitud');
  }
  return body as T;
}
