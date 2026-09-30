const TOKEN_KEY = 'refugio_auth_token';

export const session = {
  get: () => (typeof localStorage === 'undefined' ? null : localStorage.getItem(TOKEN_KEY)),
  set: (token: string) => localStorage.setItem(TOKEN_KEY, token),
  clear: () => localStorage.removeItem(TOKEN_KEY),
};
