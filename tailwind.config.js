/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "bg-greenish",
    "bg-england",
    "bg-card1",
    "bg-card2",
    "bg-card3",
    "bg-purpleGradient",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        secondBackground: "var(--color-secondBackground)",
        thirdBackground: "var(--color-thirdBackground)",
        glideBackground: "var(--color-glideBackground)",
        card1: "var(--color-card1)",
        card2: "var(--color-card2)",
        card3: "var(--color-card3)",
        text: "var(--color-text)",
        button: "var(--color-button)",
      },
      fontFamily: {
        caladea: "var(--font-caladea)",
        inter: "var(--font-inter)",
      },
      backgroundImage: {
        greenish: "linear-gradient(to right, #CFFADD 0%, #F9F9F6 50%, #FF4C4C 100%)",
        england: "linear-gradient(to right, #DBE5FF 0%, #F7F4FF 50%, #EBDFFC 100%)",
        purpleGradient: "linear-gradient(to right, #BE0D86 0%, #464B67 50%, #2F354F 100%)",
      },
    },
  },
  plugins: [],
}
