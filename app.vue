<script setup lang="ts">
useHead({
  title: "Home",
  htmlAttrs: { lang: "en" },
  meta: [
    {
      charset: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "description",
      content:
        "Explore Jan Walker's career journey on his website.Discover his expertise in the .NET ecosystem, Vue.js, Next.js, and NUXT.",
    },
    {
      name: "keywords",
      content:
        "jan walker, walker jan, software developer, software engineer, junior software developer, .NET, dotNet, NUXT, Vue, Vue.js, Next.js, Blazor, Asp.Net, course instructor",
    },
    {
      name: "google-site-verification",
      content: "ByWX2P1yb7HEPfPymaJ9rd6a9E6olnxGSIu87z7lzFQ",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
