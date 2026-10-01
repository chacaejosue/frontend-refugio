import { pool } from '../config/database.js';
import type { Animal, AnimalFilters, AnimalInput } from '../types/animal.types.js';

export class AnimalRepository {
  async create(input: AnimalInput): Promise<Animal> {
    const result = await pool.query<Animal>(
      `INSERT INTO "Animal" ("Nombre", "Raza", "Edad", "Sexo", "TipoAnimal")
       VALUES ($1, $2, $3, $4, $5)
       RETURNING "Identificador", "Nombre", "Raza", "Edad", "Sexo", "FechaIngreso", "TipoAnimal"`,
      [input.nombre, input.raza, input.edad, input.sexo, input.tipoAnimal],
    );
    return result.rows[0];
  }

  async update(id: number, input: AnimalInput): Promise<Animal | undefined> {
    const result = await pool.query<Animal>(
      `UPDATE "Animal" SET "Nombre" = $1, "Raza" = $2, "Edad" = $3,
       "Sexo" = $4, "TipoAnimal" = $5 WHERE "Identificador" = $6
       RETURNING "Identificador", "Nombre", "Raza", "Edad", "Sexo", "FechaIngreso", "TipoAnimal"`,
      [input.nombre, input.raza, input.edad, input.sexo, input.tipoAnimal, id],
    );
    return result.rows[0];
  }

  async findAll(filters: AnimalFilters): Promise<Animal[]> {
    const conditions: string[] = [];
    const values: string[] = [];
    const add = (condition: string, value: string) => {
      values.push(value);
      conditions.push(condition.replace('?', `$${values.length}`));
    };

    if (filters.nombre) add('"Nombre" ILIKE ?', `%${filters.nombre}%`);
    if (filters.raza) add('"Raza" ILIKE ?', `%${filters.raza}%`);
    if (filters.sexo) add('"Sexo" = ?', filters.sexo);
    if (filters.tipoAnimal) add('"TipoAnimal" = ?', filters.tipoAnimal);

    const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
    const result = await pool.query<Animal>(
      `SELECT "Identificador", "Nombre", "Raza", "Edad", "Sexo", "FechaIngreso", "TipoAnimal"
       FROM "Animal" ${where} ORDER BY "Identificador"`,
      values,
    );
    return result.rows;
  }
}
