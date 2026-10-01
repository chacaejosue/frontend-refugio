import type { Context } from 'hono';
import { RefugeService } from '../services/refuge.service.js';

const service = new RefugeService();

export const profile = (c: Context) => c.json(service.getProfile());
