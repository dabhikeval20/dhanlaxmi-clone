/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d9eeff',
          500: '#0f6bff',
          600: '#0b56d6',
          700: '#0a3f9d',
          900: '#07284f',
        },
        ink: '#0f172a',
        mist: '#f5f7fb',
      },
      boxShadow: {
        soft: '0 20px 60px -25px rgba(15, 107, 255, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
