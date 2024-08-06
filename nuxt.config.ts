import path from "path"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint"],
    vite: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname),
            },
        },
    },
    css: ["@/assets/styles/main.css"],
})
