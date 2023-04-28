/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        mono: ['var(--font-chivo-mono)'],
      },
    },
  },
}
