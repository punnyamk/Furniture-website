/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", // ✅ includes all React files
];
export const theme = {
  extend: {
    keyframes: {
      slideIn: {
        "0%": { opacity: "0", transform: "translateY(50px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
    animation: {
      slideIn: "slideIn 1s ease-out forwards",
    },
  },
};
export const plugins = [];
