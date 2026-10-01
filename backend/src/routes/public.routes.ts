import { Hono } from 'hono';
import { profile } from '../controllers/refuge.controller.js';

export const publicRoutes = new Hono();
publicRoutes.get('/refuge', profile);
