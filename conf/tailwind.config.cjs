/**
 * @type {import('tailwindcss').Config}
 */
const config = {
  content: [
    './src/**/*.svelte',
    './src/app.html',
  ],
  theme: {
    extend: {
      colors: {
        dark: 'rgba(30 30 30 / <alpha-value>)',
        light: 'rgba(206 206 206 / <alpha-value>)',
      },
    },
  },
};

module.exports = config;
