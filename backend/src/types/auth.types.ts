import type { JWTPayload } from 'jose';

export type AuthPayload = JWTPayload & { sub: string; usuario: string };

export type AppEnv = {
  Variables: { auth: AuthPayload };
};
