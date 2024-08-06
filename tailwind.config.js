/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app.vue",
        "./pages/**/*.{vue,html,js}",
        "./components/**/*.{vue,html,js}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#006340",
            },
        },
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
            serif: ["Roboto", "serif"],
        },
    },
    plugins: [require("@tailwindcss/forms")],
}
