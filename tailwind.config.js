/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        littlepaws: {
          red: "#C40C0C",
          orange: "#FF6500",
          light_orange: "#FF8A08",
          yellow: "#FFC100",
          grey: "#eeeee4",
          black: "#161A30",
          y: "#FFC55A"
        },
      },
    },
  },
  plugins: [],
};
