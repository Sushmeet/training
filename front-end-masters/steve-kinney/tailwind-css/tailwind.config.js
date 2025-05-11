/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // tells Tailwind which files to scan for classes
  ],
  theme: {
    extend: {
      // Add custom colors or extend existing ones
      colors: {
        // Example custom color
        "custom-blue": "#1e40af",
      },
      // Add custom spacing or extend existing ones
      spacing: {
        128: "32rem",
      },
      // Add custom font family or extend existing ones
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    // Add any plugins here
  ],
};
