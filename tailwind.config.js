/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'animate-fadeIn',
    'animate-slideUp',
    'animate-fade-in-up',
    'animate-slide-in',
    'animate-blob',
    'animate-float',
    'animate-bounce-slow',
    'animate-pulse-slow',
    'animation-delay-2000',
    'animation-delay-4000'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

