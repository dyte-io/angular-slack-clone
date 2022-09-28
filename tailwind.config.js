/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "dp-image": "url('/assets/img/dp.jpeg')",
      },
      colors: {
        "slack-dark": "#361536",
        "slack-medium": "#431e44",
        "slack-light": "#583b59",
        "dyte-blue": "#2160FD",
        "dyte-black": "#06060E",
        "dyte-grey": "#262626",
      },
    },
  },
  plugins: [],
};
