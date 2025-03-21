/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ibm-plex': ['"IBM Plex Sans"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif']
      },
      colors: {
        'primary-blue': '#E3F5FF',
        'primary-purple': '#E5ECF6',
        'primary-light': '#F7F9FB',
        'primary-brand': '#1C1C1C',
        'secondary-indigo': '#95A4FC',
        'secondary-mint': '#BAEDBD',
        'secondary-blue': '#B1E3FF',
        'secondary-cyan': '#A8C5DA',
        'secondary-green': '#A1E3CB',
      },
    },
  },
  plugins: [],
};
