import { Hono } from 'hono';
import { login, logout } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import type { AppEnv } from '../types/auth.types.js';

export const authRoutes = new Hono<AppEnv>();
authRoutes.post('/login', login);
authRoutes.post('/logout', authMiddleware, logout);
