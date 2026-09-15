/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      colors: {
        brand: { 50:'#F7FEE7',100:'#ECFCCB',500:'#84CC16',600:'#4D7C0F',700:'#3F6212' },
        navy: { DEFAULT:'#0C0F0A', dark:'#070906', light:'#1A2114', 50:'#F2F5EA' },
        cream: '#F7F5F0',
        ink: '#141A0E' 
      },
      fontFamily: { display: ['"Plus Jakarta Sans"','system-ui','sans-serif'], body: ['Inter','system-ui','sans-serif'] }
    }
  },
  plugins: []
}
