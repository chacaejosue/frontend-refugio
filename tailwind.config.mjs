/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#F3F6F8',
        teal: { 950: '#1D3447', 900: '#29465B', 800: '#66849A' },
        sun: { 400: '#B9A17F', 500: '#A88762' },
        ink: '#263746',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(41, 70, 91, .14)',
      },
    },
  },
  plugins: [],
};
