const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      height: {
        102: "28rem",
        105: "32rem",
        110: "40rem",
        "80vh": "80vh",
      },
      width: {
        102: "28rem",
        105: "32rem",
        110: "40rem",
      },
    },
  },
  plugins: [],
};
