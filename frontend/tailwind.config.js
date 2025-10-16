/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 50:'#eef2ff', 100:'#e0e7ff', 600:'#4f46e5', 700:'#4338ca' }
      },
      boxShadow: {
        soft: '0 8px 28px rgba(0,0,0,.08)',
      },
      borderRadius: {
        glass: '1.25rem'
      }
    },
  },
  plugins: [],
};
