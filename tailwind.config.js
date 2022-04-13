module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        home: "url('/assets/images/background.png')",
      }),
    },
    fontFamily: {
      body: ['Quicksand', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')],
  variants: {
    extends: {},
    scrollbar: ['rounded'],
  },
};
