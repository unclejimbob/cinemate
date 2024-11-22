// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js",
        },
      ],
    },
  },

  runtimeConfig: {
    // Private
    accessToken: process.env.NUXT_ACCESS_TOKEN,
    apiKey: process.env.NUXT_API_KEY,
  },
});
