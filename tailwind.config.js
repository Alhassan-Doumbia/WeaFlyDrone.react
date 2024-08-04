/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'android': '360px',
    },
    extend: {
      fontFamily:{
        'Montserrat':'Montserrat',
        'Poppins':'Poppins',
      },
      colors:{
        borderColor:"#CACACA",
        linkColor:"#3254CE",
        primary:"#000000",
        secondary:"#11A37F"
      }
    
    },
  },
  plugins: [],
}

