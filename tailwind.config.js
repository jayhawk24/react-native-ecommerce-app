/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "font-light": ["Inter_300Light"],
        "font-body": ["Inter_400Regular"],
        "font-semibold": ["Inter_500Medium"],
        "font-bold": ["Inter_700Bold"],
      },
      colors: {
        "primary": { DEFAULT: '#9775FA', 100: '#FFFFFF', 200: '#F0EBFE', 300: '#D2C4FD', 400: '#B59CFB', 500: '#9775FA', 600: '#6E3FF8', 700: '#4509F6', 800: '#3607C0', 900: '#27058A', 950: '#1F046F' },
        "secondary": {
          DEFAULT: '#FF7043',
          50: '#FFFCFB',
          100: '#FFECE6',
          200: '#FFCDBD',
          300: '#FFAE95',
          400: '#FF8F6C',
          500: '#FF7043',
          600: '#FF450B',
          700: '#D23200',
          800: '#9A2500',
          900: '#621700',
          950: '#461100'
        },
        "black": {
          DEFAULT: '#1D1E20',
          50: '#747880',
          100: '#6B6E76',
          200: '#575A60',
          300: '#44464B',
          400: '#303235',
          500: '#1D1E20',
          600: '#020203',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        "grey": {
          DEFAULT: '#8F959E',
          50: '#F1F2F3',
          100: '#E6E8EA',
          200: '#D1D3D7',
          300: '#BBBEC4',
          400: '#A5AAB1',
          500: '#8F959E',
          600: '#727983',
          700: '#585D65',
          800: '#3E4147',
          900: '#242629',
          950: '#17181A'
        },
        "white": {
          DEFAULT: '#F5F6FA',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F5F6FA',
          600: '#D0D4E7',
          700: '#AAB3D5',
          800: '#8591C2',
          900: '#5F6FAF',
          950: '#5161A2'
        },
      }
    },
  },
  plugins: [],
}

