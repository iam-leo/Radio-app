module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: 'Poppins, sans-serif',
        Inconsolata: 'Inconsolata, monospace'
      },
      colors: {
        liberty: {
          main: '#485696',
          shadow_dark: '#242d57',
          shadow_light: '#9dacec'
        },
        pumpkin: '#FC7A1E',
        goldCrayola: '#F9C784',
        platinum: '#E7E7E7',
      },
      boxShadow: {
        'shadow-neumorphism': '9px 9px 16px #242d57, -9px -9px 16px #9dacec',

        'btn-shadow': '-6px -6px 18px 0px #9dacec, -4px -4px 4px 0px #9dacec, 6px 6px 18px #0001, 3px 3px 4px 0px #242d57',

        'btn-active': ' inset -5px -5px 16px #9dacec, inset -3px -3px 3px #9dacec, inset 6px 6px 14px #242d57, inset 3px 3px 4px #242d57'
      }
    },
  },
  plugins: [],
}