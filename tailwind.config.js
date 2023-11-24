/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./script.js","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        // Primary
        // Linear_gradient 
        active_input_border:'hsl(249, 99%, 64%)',
        to:'hsl(278, 94%, 30%)',
        Red_input_errors: 'hsl(0, 100%, 66%)',
        // Neutral
        White:'hsl(0, 0%, 100%)',
        Light_grayish_violet: 'hsl(270, 3%, 87%)',
        Dark_grayish_violet: 'hsl(279, 6%, 55%)',
        Very_dark_violet: 'hsl(278, 68%, 11%)',
      }, 
    },
    fontFamily:{
      space_grotesk:"'Space Grotesk', sans-serif"
    },
    backgroundImage:{
      'card_front':'url(./images/bg-card-front.png)',
      'card_back':'url(./images/bg-card-back.png)', 
    },
  },
  plugins: [],
}

