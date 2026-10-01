import type { Context } from 'hono';
import { AnimalService } from '../services/animal.service.js';
import { animalFiltersSchema, animalIdSchema, animalSchema } from '../schemas/animal.schema.js';

const service = new AnimalService();

export const create = async (c: Context) => c.json(await service.create(animalSchema.parse(await c.req.json())), 201);

export const update = async (c: Context) => {
  const { id } = animalIdSchema.parse({ id: c.req.param('id') });
  return c.json(await service.update(id, animalSchema.parse(await c.req.json())));
};

export const list = async (c: Context) => {
  const query = animalFiltersSchema.parse({
    nombre: c.req.query('nombre'),
    raza: c.req.query('raza'),
    sexo: c.req.query('sexo'),
    tipoAnimal: c.req.query('tipoAnimal'),
  });
  return c.json(await service.list(query));
};
