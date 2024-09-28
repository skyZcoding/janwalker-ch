// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   ssr: true,
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/robots', 'nuxt-simple-sitemap', 'nuxt-icon', '@nuxtjs/seo'],
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://janwalker.com',
        }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})