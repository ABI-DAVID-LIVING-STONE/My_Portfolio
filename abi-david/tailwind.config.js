/** @type {import('tailwindcss').Config} */
module.exports = {
  'content': ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
primary: "#ff8c00",
        
secondary: "#D926AA",
        
accent: "#1FB2A5",
        
neutral: "#3D4451",
        
"base-100": "#3D4451",
        
info: "#3ABFF8",
        
success: "#36D399",
        
warning: "#FBBD23",
        
error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  }





