/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "bg-greenish",
    "bg-england",
    "bg-blueGradientOrizontal",
    "bg-blueGradientVertical"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        testBackground: "var(--color-testBackground)",
        text2: "var(--color-text2)",
        p: "var(--color-p)",
        button: "var(--color-button)",
      },
      fontFamily: {
        caladea: "var(--font-caladea)",
        inter: "var(--font-inter)",
      },
      backgroundImage: {
        greenish: "linear-gradient(to right, #CFFADD 0%, #F9F9F6 50%, #FF4C4C 100%)",
        england: "linear-gradient(to right, #DBE5FF 0%, #F7F4FF 50%, #EBDFFC 100%)",
        blueGradientOrizontal: "linear-gradient(to right, #42565D 0%, #348FAF 100%)",
        blueGradientVertical: "linear-gradient(to bottom, #42565D 0%, #348FAF 100%)",
      },
    },
  },
  plugins: [],
}
