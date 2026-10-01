import { Hono } from 'hono';
import { create, list, update } from '../controllers/animal.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import type { AppEnv } from '../types/auth.types.js';

export const animalRoutes = new Hono<AppEnv>();
animalRoutes.use('*', authMiddleware);
animalRoutes.post('/', create);
animalRoutes.put('/:id', update);
animalRoutes.get('/', list);
