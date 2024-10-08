/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        dark: {
          gray: "#1C1C1E", // Dark gray for backgrounds
        },
        neutral: {
          lightGray: "#D1D1D6", // Soft light gray
          offWhite: "#F7F7F7", // Creamy white for text or background
        },
        electric: {
          purple: {
            50: "#faf5ff",
            100: "#f3e9fe",
            200: "#e9d6fe",
            300: "#d8b6fc",
            400: "#bf88f8",
            500: "#a75af2",
            600: "#8a2be2",
            700: "#7d28c8",
            800: "#6a25a4",
            900: "#572083",
            950: "#3b0a61",
          },
        },
      },
    },
  },
  plugins: [],
};
