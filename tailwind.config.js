/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#22d3ee",
          blue: "#3b82f6",
          purple: "#a855f7",
          dark: "#020617",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.15)",
      },
    },
  },
  plugins: [],
};
