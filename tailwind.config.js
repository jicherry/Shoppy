/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#001f3f",
        navy: "#001f3f",
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`,
      },
      backgroundSize: {
        custom: "cover",
      },
    },
  },
  plugins: [],
};
