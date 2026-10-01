import { z } from 'zod';

const sexo = z.enum(['Hembra', 'Macho']);
const tipoAnimal = z.enum(['Perro', 'Gato']);

export const animalSchema = z.object({
  nombre: z.string().trim().min(1),
  raza: z.string().trim().min(1),
  edad: z.coerce.number().int().nonnegative(),
  sexo,
  tipoAnimal,
});

export const animalIdSchema = z.object({ id: z.coerce.number().int().positive() });

export const animalFiltersSchema = z.object({
  nombre: z.string().optional(),
  raza: z.string().optional(),
  sexo: sexo.optional(),
  tipoAnimal: tipoAnimal.optional(),
});
