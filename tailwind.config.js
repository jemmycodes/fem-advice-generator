module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        darkBlue: "hsl(218,23%,16%)",
        neonGreen: "hsl(150,100%,66%)",
        grayishBlue: "hsl(217,19%,38%)",
        darkGrayishBlue: "hsl(217,19%,24%)",
        lightCyan: "hsl(193,38%,86%)",
      },
    },
  },
  plugins: [],
};
