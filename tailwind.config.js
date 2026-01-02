/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D91E5C', // Magenta/Pink (main brand color)
          dark: '#B01849',
          light: '#E94B7A',
          lighter: '#F298B8',
        },
        secondary: {
          DEFAULT: '#1B5E7E', // Teal/Blue (professional)
          dark: '#134A5F',
          light: '#2B7A9E',
          lighter: '#4A9BC4',
        },
        accent: {
          DEFAULT: '#FFD700', // Gold (UAE premium - use sparingly)
          dark: '#D4AF37',
          light: '#FFE55C',
        },
        neutral: {
          DEFAULT: '#2D2D2D', // Dark charcoal
          light: '#3D3D3D',
          lighter: '#5D5D5D',
          lightest: '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Tahoma', 'Arial', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 215, 0, 0.1)',
        'luxury-lg': '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 30px rgba(255, 215, 0, 0.15)',
        'gold': '0 4px 20px rgba(255, 215, 0, 0.3)',
        'premium': '0 8px 32px rgba(15, 76, 117, 0.2)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #D91E5C 0%, #E94B7A 50%, #F298B8 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #1B5E7E 0%, #2B7A9E 50%, #4A9BC4 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #FFE55C 50%, #FFF8DC 100%)',
      },
      borderRadius: {
        'luxury': '16px',
        'premium': '20px',
      },
    },
  },
  plugins: [],
}
