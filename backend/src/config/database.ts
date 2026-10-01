import { Pool } from 'pg';
import { env } from './environment.js';

export const pool = new Pool({ connectionString: env.databaseUrl });

export const verifyDatabaseConnection = async (): Promise<void> => {
  const client = await pool.connect();
  try {
    await client.query('SELECT 1');
  } finally {
    client.release();
  }
};
