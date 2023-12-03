/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      karla: ["Karla", "sans-serif"],
    },
    backgroundColor: {
      body: "#F6FCFC",
      primary: "#1FBEF9",
      secondary: "#E2F3FB"
    }
  },
  plugins: [],
}

