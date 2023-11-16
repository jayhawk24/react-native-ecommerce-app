/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        interLight: ["Inter_300Light"],
        interRegular: ["Inter_400Regular"],
        interMedium: ["Inter_500Medium"],
        interBold: ["Inter_700Bold"],
      },
    },
  },
  plugins: [],
}

