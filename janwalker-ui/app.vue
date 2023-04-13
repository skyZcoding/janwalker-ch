<script setup lang="ts">
  useHead({
    title: 'Jan Walker',
    htmlAttrs: { lang: 'en' },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport', content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'description',
        content: 'This is the website of Jan Walker. It serves as a curriculum vitae and displays all of the information about his work career. This includes experience in the whole .Net ecosystem, Vue.js, Next.js and React.'
      },
      {
      name: 'keywords',
      content: 'software developer, software engineer, Software Developer, Software Engineer, junior software developer, Junior Software Developer, .NET, dotNet, React, Vue, Vue.js, Next.js, Blazor, Asp.Net, Course instructor, course instructor'
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
