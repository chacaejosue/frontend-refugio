export type Sexo = 'Hembra' | 'Macho';
export type TipoAnimal = 'Perro' | 'Gato';

export type Animal = {
  id: number;
  nombre: string;
  raza: string;
  edad: number;
  sexo: Sexo;
  fechaIngreso: string;
  tipoAnimal: TipoAnimal;
};

export type AnimalInput = Omit<Animal, 'id' | 'fechaIngreso'>;
