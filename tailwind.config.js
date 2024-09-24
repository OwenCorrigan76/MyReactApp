/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"]
      },
      colors: {
        primary: "#1D4ED8", // Custom blue
        secondary: "#F97316", // Custom orange
        accent: "#14B8A6" // Custom teal
      },
      gridTemplateColumns: {
        "70/30": "70% 28%"
      }
    }
  },
  plugins: []
};
