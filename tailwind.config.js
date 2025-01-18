/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: "'Archivo Black', sans-serif",
        },
      colors:{
        dogblue: '#47A1C4',
        productorange:'#E48239',
        productbrown:'#956548',
        productyellow:'#EAB726',
        productgreen:'#4C8447',
      }
    },
  },
  plugins: [],
}



//main color: teal-800 and purple-800