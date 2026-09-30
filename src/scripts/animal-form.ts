import { createAnimal, updateAnimal } from '../services/animal.service';
import { session } from '../utils/storage';

const form = document.querySelector<HTMLFormElement>('#animal-form');
const error = document.querySelector<HTMLElement>('#form-error');

if (!session.get()) window.location.href = '/login';

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form) return;
  try {
    const input = Object.fromEntries(new FormData(form));
    const mode = form.dataset.mode;
    const id = Number(form.dataset.id);
    if (mode === 'edit') await updateAnimal(id, input);
    else await createAnimal(input);
    window.location.href = '/admin/animals';
  } catch (cause) {
    if (error) {
      error.textContent = cause instanceof Error ? cause.message : 'Datos inválidos';
      error.classList.remove('hidden');
    }
  }
});
