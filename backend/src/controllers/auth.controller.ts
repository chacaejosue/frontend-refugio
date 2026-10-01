import type { Context } from 'hono';
import { loginSchema } from '../schemas/auth.schema.js';
import { AuthService } from '../services/auth.service.js';

const service = new AuthService();

export const login = async (c: Context) => {
  const input = loginSchema.parse(await c.req.json());
  const token = await service.login(input.usuario, input.contrasena);
  return c.json({ token });
};

export const logout = (c: Context) => c.json({ message: 'Sesión cerrada correctamente' });
