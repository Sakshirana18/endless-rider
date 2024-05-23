/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        "billy-ohio": ["Billy Ohio", "sans-serif"],
      },
    },
  },
  plugins: [],
};
