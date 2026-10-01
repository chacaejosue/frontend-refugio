export type Sexo = 'Hembra' | 'Macho';
export type TipoAnimal = 'Perro' | 'Gato';

export type Animal = {
  Identificador: number;
  Nombre: string;
  Raza: string;
  Edad: number;
  Sexo: Sexo;
  FechaIngreso: string;
  TipoAnimal: TipoAnimal;
};

export type AnimalInput = {
  nombre: string;
  raza: string;
  edad: number;
  sexo: Sexo;
  tipoAnimal: TipoAnimal;
};
export type AnimalFilters = Partial<AnimalInput>;
