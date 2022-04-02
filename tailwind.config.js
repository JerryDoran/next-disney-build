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
      body: ['Montserrat', 'sans-serif'],
    },
  },
  variants: {
    extends: {},
  },
  plugins: [],
}
