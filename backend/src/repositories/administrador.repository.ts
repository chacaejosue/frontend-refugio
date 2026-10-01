import { pool } from '../config/database.js';

export type Administrador = {
  Identificador: number;
  Usuario: string;
  Contrasena: string;
};

export class AdministradorRepository {
  async findByUsuario(usuario: string): Promise<Administrador | undefined> {
    const result = await pool.query<Administrador>(
      'SELECT "Identificador", "Usuario", "Contrasena" FROM "Administrador" WHERE "Usuario" = $1',
      [usuario],
    );
    return result.rows[0];
  }
}
