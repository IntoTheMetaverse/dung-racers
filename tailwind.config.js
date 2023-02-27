/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react//*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },  
      fontFamily: { 
        dosfont: ["VT323", "monospace"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
