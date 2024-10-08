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
    <header class="w-full py-4 flex justify-center">
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
    <section class="">
      <Card>
        <h1>Test</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          facilis necessitatibus et recusandae error. Praesentium, consequatur
          saepe nobis impedit necessitatibus ab voluptatibus maiores in alias,
          voluptatem repellat, repudiandae odio sequi.
        </p>
        <Button>Test</Button>
      </Card>
    </section>

    <footer class="h-[90rem]"></footer>
  </div>
</template>
