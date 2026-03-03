/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'floral-white': '#FFFBF5',
        'twenty-carat': '#FF8F40',
        'red-october': '#FE2C0A',
        'beastly-flesh': '#6D0E0A',
        'carol': '#358FAF',
        'downriver': '#06294A',
        'ghana-green': '#006B3F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Big Shoulders Display"', 'Outfit', 'sans-serif'], // Added a more condensed display font
      },
      backgroundImage: {
        'independence-arch': "url('https://images.unsplash.com/photo-1590483254199-0a672322394a?q=80&w=2000')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
