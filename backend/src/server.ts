import { serve } from '@hono/node-server';
import { app } from './app.js';
import { verifyDatabaseConnection } from './config/database.js';
import { env } from './config/environment.js';

await verifyDatabaseConnection();
serve({ fetch: app.fetch, port: env.port });
console.log(`Servidor ejecutándose en http://localhost:${env.port}`);
