import 'dotenv/config';

const required = (name: string, fallback?: string): string => {
  const value = process.env[name] ?? fallback;
  if (!value) throw new Error(`Falta la variable de entorno ${name}`);
  return value;
};

export const env = {
  port: Number(process.env.PORT ?? 3000),
  databaseUrl: required('DATABASE_URL'),
  jwtSecret: required('JWT_SECRET'),
  jwtExpiresIn: required('JWT_EXPIRES_IN', '1h'),
  bcryptRounds: Number(process.env.BCRYPT_ROUNDS ?? 8),
  frontendOrigin: process.env.FRONTEND_ORIGIN ?? 'http://localhost:4321',
};
