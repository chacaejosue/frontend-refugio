import type { Animal } from '../types/animal.types';

export type BackendAnimal = {
  Identificador: number;
  Nombre: string;
  Raza: string;
  Edad: number;
  Sexo: Animal['sexo'];
  FechaIngreso: string;
  TipoAnimal: Animal['tipoAnimal'];
};

export const mapAnimal = (animal: BackendAnimal): Animal => ({
  id: animal.Identificador,
  nombre: animal.Nombre,
  raza: animal.Raza,
  edad: animal.Edad,
  sexo: animal.Sexo,
  fechaIngreso: animal.FechaIngreso,
  tipoAnimal: animal.TipoAnimal,
});
