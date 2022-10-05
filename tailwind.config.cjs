/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "var(--surface-brand)",
          200: "#AFF9BB",
          400: "var(--brand)",
          500: "var(--brand-hover)",
          700: "#1A9268",
        },
        error: {
          100: "#FDE1D3",
          400: "#E9635A",
          600: "#BC1D2E",
        },
        "brand-text": {
          primary: "#22394A",
          secondary: "#6C7C80",
        },
      },
    },
  },
  plugins: [],
};
