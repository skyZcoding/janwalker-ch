<script setup lang="ts">
const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "CV",
    link: "/cv",
  },
];
</script>

<template>
  <div class="bg-dark-gray">
    <header class="w-full py-4 flex justify-center mb-8">
      <div class="flex flex-row items-center">
        <div v-for="(link, index) in links" :key="index" class="mx-2">
          <NuxtLink :to="link.link" class="align-middle">
            <p
              class="text-neutral-lightGray font-semibold hover:text-gradient duration-200"
              :title="link.title"
            >
              {{ link.title }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </header>
    <section class="flex flex-col md:flex-row">
      <div
        class="flex flex-col w-fit justify-center md:pr-8 lg:pr-12 items-center md:items-start"
      >
        <h1 class="font-bold">
          Building <span class="text-gradient">Seamless</span> Web Applications
        </h1>
        <p class="text-gray-300 text-base mt-4">
          I am a full-stack software developer with six years of professional
          experience. I love trying out new technologies, mainly in web
          development.
        </p>
        <Button class="mt-2">Contact Me</Button>
      </div>
      <div
        class="w-auto min-w-96 flex justify-center items-center mt-4 md:mt-0"
      >
        <NuxtImg src="/images/hero.svg" alt="Hero Image" />
      </div>
    </section>

    <footer class="h-[90rem]"></footer>
  </div>
</template>
