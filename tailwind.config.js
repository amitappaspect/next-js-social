/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00a2be",
          "secondary": "#00e900",
          "accent": "#65a30d",
          "neutral": "#191304",
          "base-100": "#fff5e4",
          "info": "#008cfa",
          "success": "#00985f",
          "warning": "#ffc400",
          "error": "#e2224b",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
