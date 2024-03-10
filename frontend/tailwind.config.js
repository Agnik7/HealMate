/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sap: "#6F9274",
        sap2: "#81AB5F",
        dark: "#0d0808",
        light: "#ffffff",
      },
    },
    
  },
  plugins: [],
};
