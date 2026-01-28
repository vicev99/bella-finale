/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bella-sky': '#00B4D8',
        'bella-orange': '#FF8C42',
        'bella-accent': '#E63946',
        'bella-light': '#F5F5F5',
      },
    },
  },
  plugins: [],
};
