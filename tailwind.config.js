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
    },
  },
  plugins: [],
}

