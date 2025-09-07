/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
   content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./providers/**/*.{js,ts,jsx,tsx}", 
  ],
    theme: {
    extend: {
      colors: {
        primary: '#5A55E0',       // رنگ مشترک
        accent: '#FABD57',        // رنگ مشترک
        light: {
          bg: '#F9FAFB',
          text: '#1F2937',
        },
        dark: {
          bg: '#0F172A',
          text: '#E5E7EB',
        },
      },
    },
  },
  plugins: [],
};
