import { jwtVerify } from 'jose';
import type { MiddlewareHandler } from 'hono';
import { env } from '../config/environment.js';
import type { AppEnv, AuthPayload } from '../types/auth.types.js';

const secret = new TextEncoder().encode(env.jwtSecret);

export const authMiddleware: MiddlewareHandler<AppEnv> = async (c, next) => {
  const header = c.req.header('Authorization');
  if (!header?.startsWith('Bearer ')) return c.json({ error: 'Token requerido' }, 401);

  try {
    const { payload } = await jwtVerify(header.slice(7), secret);
    if (!payload.sub || typeof payload.usuario !== 'string') throw new Error('Token inválido');
    c.set('auth', payload as AuthPayload);
    await next();
  } catch {
    return c.json({ error: 'Token inválido o expirado' }, 401);
  }
};
