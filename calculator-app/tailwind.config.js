module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#ffffff',
      gray: {
        '50': 'hsl(0, 0%, 93%)',
        '100': 'hsl(0, 0%, 90%)',
      },
      blue: {
        '200': 'hsl(225, 21%, 49%)',
        '350': 'hsl(224, 28%, 35%)',
        '300': 'hsl(222, 26%, 31%)',
        '500': 'hsl(223, 31%, 20%)',
        '800': 'hsl(224, 36%, 15%)',
        '900': 'hsl(198, 20%, 13%)',
      },
      red: {
        '500': 'hsl(6, 63%, 50%)',
        '800': 'hsl(6, 70%, 34%)'
      },
      yellow: {
        '500': 'hsl(52, 100%, 62%)',
      },
      orange: {
        '700': 'hsl(25, 98%, 40%)',
        '800': 'hsl(25, 99%, 27%)',
      },
      cyan: {
        '400': 'hsl(177, 92%, 70%)',
        '500': 'hsl(176, 100%, 44%)',
        '600': 'hsl(185, 42%, 37%)',
        '700': 'hsl(185, 58%, 25%)',
      },
      grayish: {
        '50': 'hsl(0, 0%, 93%)',
        '100': 'hsl(45, 7%, 89%)',
        '150': 'hsl(30, 25%, 89%)',
        '250': 'hsl(28, 16%, 65%)',
        '300': 'hsl(35, 11%, 61%)',
        '400': 'hsl(0, 5%, 81%)',
        '900': 'hsl(60, 10%, 19%)',
      },
      violet: {
        '400': 'hsl(285, 91%, 52%)',
        '450': 'hsl(290, 70%, 36%)',
        '500': 'hsl(281, 89%, 26%)',
        '600': 'hsl(268, 47%, 21%)',
        '700': 'hsl(268, 71%, 12%)',
        '800': 'hsl(268, 75%, 9%)',
      }
    },
  },
  plugins: [],
}
