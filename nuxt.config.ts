import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '', // use .dark/.light on html
    preference: 'dark', // default to dark on first load
    fallback: 'dark',
  },
});