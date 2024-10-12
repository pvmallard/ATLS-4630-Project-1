/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "*/index.html",
    "**/*{.js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: '#1fcffa',
      gray: {
        100: '#f7fafc',
        900: "#1a202c"
      }
    },
    fontFamily:{

    },
    screens:{
      
    },
    extend: {},
  },
  plugins: [],
}

