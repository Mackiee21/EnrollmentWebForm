/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "header": 'rgb(0, 94, 171)',
        "main": 'rgb(0, 122, 204)'
      },
      padding:{
        'content': '16.666667%'
      },
      fontSize:{
        xsm: "15px"
      }
    },
  },
  plugins: [],
}

