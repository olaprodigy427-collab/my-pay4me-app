/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          50:  '#fafff5',
          100: '#f0fdf4',
          200: '#d9f99e',   // light lime for badges/circle
          300: '#bef264',
          400: '#a3e635',   // main accent green
          500: '#84cc16',
          600: '#65a30d',
        },
        'brand-black': '#000000',
        'brand-gray':  '#f3f4f6',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}