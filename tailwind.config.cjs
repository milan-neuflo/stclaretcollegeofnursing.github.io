/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#D4AF37',
        gold: '#001F3F',
        'gold-dark': '#FDF6E3',
        'light-bg': '#FDF6E3',
        'blue-bg': '#FBF6E3',
        'blue-light': '#F0E5AC',
        'blue-border': '#E5CB6A',
        'text-secondary': '#1A1A1B',
        'text-muted': '#6E6E6F',
      },
      fontFamily: {
        'newsreader': ['Newsreader', 'serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'container': '1536px',
      },
    },
  },
  plugins: [],
};
