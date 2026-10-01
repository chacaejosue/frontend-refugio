import bcrypt from 'bcrypt';
import { SignJWT } from 'jose';
import { env } from '../config/environment.js';
import { AdministradorRepository } from '../repositories/administrador.repository.js';

const secret = new TextEncoder().encode(env.jwtSecret);

export class AuthService {
  constructor(private readonly admins = new AdministradorRepository()) {}

  async login(usuario: string, contrasena: string): Promise<string> {
    const admin = await this.admins.findByUsuario(usuario);
    if (!admin || !(await bcrypt.compare(contrasena, admin.Contrasena))) {
      throw new Error('Credenciales inválidas');
    }

    return new SignJWT({ usuario: admin.Usuario })
      .setProtectedHeader({ alg: 'HS256' })
      .setSubject(String(admin.Identificador))
      .setIssuedAt()
      .setExpirationTime(env.jwtExpiresIn)
      .sign(secret);
  }
}
