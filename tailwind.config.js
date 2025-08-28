/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        secondBackground: "var(--color-secondBackground)",
        thirdBackground: "var(--color-thirdBackground)",
        text: "var(--color-text)",
        button: "var(--color-button)",
      },
      fontFamily: {
        caladea: "var(--font-caladea)",
        inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
}
