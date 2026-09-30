import { listAnimals } from '../services/animal.service';
import { logout } from '../services/auth.service';
import { session } from '../utils/storage';
import type { Animal } from '../types/animal.types';

if (!session.get()) window.location.href = '/login';

const list = document.querySelector<HTMLElement>('#animal-list');
const error = document.querySelector<HTMLElement>('#list-error');

const createText = (tag: string, text: string, className: string) => {
  const element = document.createElement(tag);
  element.textContent = text;
  element.className = className;
  return element;
};

const renderAnimal = (animal: Animal) => {
  const card = document.createElement('article');
  card.className = 'rounded-3xl bg-white p-6 shadow-soft';

  const header = document.createElement('div');
  header.className = 'flex items-start justify-between';
  const badge = createText('span', animal.tipoAnimal, `rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${animal.tipoAnimal === 'Perro' ? 'bg-teal-900 text-white' : 'bg-sun-500 text-ink'}`);
  const icon = createText('span', animal.tipoAnimal === 'Perro' ? '🐶' : '🐱', 'text-2xl');
  header.append(badge, icon);

  const name = createText('h2', animal.nombre, 'mt-5 font-display text-3xl');
  const details = createText('p', `${animal.raza} · ${animal.edad} ${animal.edad === 1 ? 'año' : 'años'}`, 'mt-1 text-sm text-slate-500');
  const footer = document.createElement('div');
  footer.className = 'mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400';
  footer.append(createText('span', animal.sexo, ''));
  const edit = document.createElement('a');
  edit.className = 'font-bold text-teal-800 hover:text-sun-500';
  edit.href = `/admin/animals/edit?id=${encodeURIComponent(animal.id)}`;
  edit.textContent = 'Editar →';
  footer.append(edit);

  card.append(header, name, details, footer);
  return card;
};

const load = async () => {
  try {
    const filters = {
      nombre: document.querySelector<HTMLInputElement>('#filter-nombre')?.value ?? '',
      raza: document.querySelector<HTMLInputElement>('#filter-raza')?.value ?? '',
      sexo: document.querySelector<HTMLSelectElement>('#filter-sexo')?.value ?? '',
      tipoAnimal: document.querySelector<HTMLSelectElement>('#filter-tipoAnimal')?.value ?? '',
    };
    const animals = await listAnimals(filters);
    if (!list) return;
    list.replaceChildren();
    if (!animals.length) {
      list.append(createText('div', 'No se encontraron animales.', 'rounded-3xl bg-white p-10 text-center text-sm text-slate-500 sm:col-span-2 lg:col-span-3'));
      return;
    }
    animals.forEach((animal) => list.append(renderAnimal(animal)));
  } catch (cause) {
    if (error) {
      error.textContent = cause instanceof Error ? cause.message : 'No se pudo cargar la lista';
      error.classList.remove('hidden');
    }
  }
};

document.querySelector('#filter-button')?.addEventListener('click', load);
document.querySelector('#logout')?.addEventListener('click', async () => {
  await logout();
  window.location.href = '/login';
});
load();
