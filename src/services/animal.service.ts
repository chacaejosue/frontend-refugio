import { api } from './api.client';
import { animalSchema } from '../schemas/animal.schema';
import { mapAnimal, type BackendAnimal } from '../utils/animal.mapper';
import type { Animal, AnimalInput } from '../types/animal.types';

export async function listAnimals(filters: Partial<AnimalInput> = {}): Promise<Animal[]> {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => { if (value !== undefined && value !== '') params.set(key, String(value)); });
  const rows = await api<BackendAnimal[]>(`/animals${params.size ? `?${params}` : ''}`);
  return rows.map(mapAnimal);
}

export async function createAnimal(input: unknown): Promise<Animal> {
  const data = animalSchema.parse(input);
  return mapAnimal(await api<BackendAnimal>('/animals', { method: 'POST', body: JSON.stringify(data) }));
}

export async function updateAnimal(id: number, input: unknown): Promise<Animal> {
  const data = animalSchema.parse(input);
  return mapAnimal(await api<BackendAnimal>(`/animals/${id}`, { method: 'PUT', body: JSON.stringify(data) }));
}
