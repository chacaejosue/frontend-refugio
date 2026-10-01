import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { HTTPException } from 'hono/http-exception';
import { ZodError } from 'zod';
import { animalRoutes } from './routes/animal.routes.js';
import { authRoutes } from './routes/auth.routes.js';
import { publicRoutes } from './routes/public.routes.js';
import { env } from './config/environment.js';

export const app = new Hono();

app.use('*', cors({
  origin: env.frontendOrigin,
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'OPTIONS'],
}));

app.get('/', (c) => c.json({ name: 'refugio-backend', status: 'ok' }));
app.route('/auth', authRoutes);
app.route('/animals', animalRoutes);
app.route('/public', publicRoutes);

app.onError((error, c) => {
  if (error instanceof ZodError) return c.json({ error: 'Datos inválidos', details: error.flatten() }, 400);
  if (error instanceof HTTPException) return error.getResponse();
  if (error.message === 'Animal no encontrado') return c.json({ error: error.message }, 404);
  if (error.message === 'Credenciales inválidas') return c.json({ error: error.message }, 401);
  console.error(error);
  return c.json({ error: 'Error interno del servidor' }, 500);
});
