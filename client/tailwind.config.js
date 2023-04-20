/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/utils/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "cool-gray": "#8693ab",
        // "columbia-blue": "#bdd4e7",
        // "raisin-black": "#212227",
        // "dim-gray": "#637074",
        // "powder-blue": "#aab9cf",
        primary: "#aab9cf",
        secondary: "#bdd4e7",
        accent: "#8693ab",
        backgroundAccent: "#e5e7eb",
        textPrimary: "#212227",
        textSecondary: "#637074",
      },
      fontFamily: {
        main: ["Rubik", "monospace"],
        monospace: ["JetBrains Mono"],
      },
    },
  },
  plugins: [],
}
