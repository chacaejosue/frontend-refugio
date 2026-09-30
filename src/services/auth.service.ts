import { api } from './api.client';
import { loginSchema } from '../schemas/auth.schema';
import { session } from '../utils/storage';

export async function login(input: unknown): Promise<void> {
  const data = loginSchema.parse(input);
  const response = await api<{ token: string }>('/auth/login', {
    method: 'POST', body: JSON.stringify(data),
  });
  session.set(response.token);
}

export async function logout(): Promise<void> {
  try { await api('/auth/logout', { method: 'POST' }); } finally { session.clear(); }
}
