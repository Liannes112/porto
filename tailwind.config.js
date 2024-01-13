/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{js,html,jsx,tsx}',
    ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '16px'
      },
      colors: {
        langit: '#00A9FF',
        lb: '#CDF5FD',
        blue: '#89CFF3',
        grey: '#eee',
        head: 'rgba(255,255,255,.8)'
      },
    },
  },
  plugins: [],
}

