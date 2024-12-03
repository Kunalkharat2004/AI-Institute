/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d9e4fb', // Light purple for the modules
        secondary: '#4d7cfe', // Blue for the header and footer
        accent: '#f3f6fc', // Background color for the main container
      },
    },
  },
  plugins: [],
}

