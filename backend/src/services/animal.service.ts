import { AnimalRepository } from '../repositories/animal.repository.js';
import type { AnimalFilters, AnimalInput } from '../types/animal.types.js';

export class AnimalService {
  constructor(private readonly animals = new AnimalRepository()) {}

  create(input: AnimalInput) { return this.animals.create(input); }
  list(filters: AnimalFilters) { return this.animals.findAll(filters); }

  async update(id: number, input: AnimalInput) {
    const animal = await this.animals.update(id, input);
    if (!animal) throw new Error('Animal no encontrado');
    return animal;
  }
}
