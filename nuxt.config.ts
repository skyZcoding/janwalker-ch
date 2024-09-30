// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/seo", "@nuxt/eslint"],
  site: {
    url: "https://janwalker.ch",
    name: "Jan Walker",
  },
});
