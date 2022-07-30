/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: { colors: { blue: "#0B294F", pink:"#F27585" } }, 
    fontFamily : {"poppins": ['Poppins', "sans-serif"]}
  },
  plugins: [],
};
