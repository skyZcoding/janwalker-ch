// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
    "@nuxt/eslint",
    "@nuxt/image",
  ],

  site: {
    url: "https://janwalker.ch",
    name: "Jan Walker",
  },

  tailwindcss: {
    configPath: "tailwind.config.js",
  },

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  compatibilityDate: "2025-02-07",
});