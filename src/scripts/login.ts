import { login } from '../services/auth.service';

const form = document.querySelector<HTMLFormElement>('#login-form');
const error = document.querySelector<HTMLElement>('#login-error');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form) return;
  error?.classList.add('hidden');
  try {
    await login(Object.fromEntries(new FormData(form)));
    window.location.href = '/admin/animals';
  } catch (cause) {
    if (error) {
      error.textContent = cause instanceof Error ? cause.message : 'No fue posible iniciar sesión';
      error.classList.remove('hidden');
    }
  }
});
