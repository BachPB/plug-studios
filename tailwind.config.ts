/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts,md}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              color: "#86e1fc",
              "&::before": {
                content: '""',
              },
              "&::after": {
                content: '""',
              },
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            pre: {
              backgroundColor: "#1e1e1e",
              code: {
                color: "#d4d4d4",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
