import type { ErrorHandler } from 'hono';

export const errorMiddleware: ErrorHandler = (error, c) => {
  console.error(error);
  const message = error.message === 'Credenciales inválidas' ? error.message : 'Error interno del servidor';
  return c.json({ error: message }, message === error.message ? 401 : 500);
};
