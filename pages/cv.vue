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
        <h1>
          Building <span class="text-gradient">Seamless</span> Web Applications
        </h1>
        <p class="text-gray-300 text-base mt-4">
          I am a full-stack software developer with six years of professional
          experience. I love trying out new technologies, mainly in web
          development.
        </p>
        <Button class="mt-2">Learn more</Button>
      </div>
      <div
        class="w-auto min-w-96 flex justify-center items-center mt-4 md:mt-0"
      >
        <NuxtImg src="/images/hero.svg" alt="Hero Image" />
      </div>
    </section>
    <section>
      <h1 class="text-center mb-10">
        What I <span class="text-gradient">Bring</span> to the Table
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 auto-rows-fr">
        <Card>
          <div
            class="rounded-lg bg-white/10 aspect-square w-fit flex justify-center items-center mb-1"
          >
            <IconFrontend class="text-white h-8 w-8 m-2" />
          </div>
          <h2 class="mb-2">Frontend Web Development</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
        </Card>
        <Card>
          <div
            class="rounded-lg bg-white/10 aspect-square w-fit flex justify-center items-center mb-1"
          >
            <IconBackend class="text-white h-8 w-8 m-2" />
          </div>
          <h2 class="mb-2">Backend Development</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
        </Card>
        <Card>
          <div
            class="rounded-lg bg-white/10 aspect-square w-fit flex justify-center items-center mb-1"
          >
            <IconDesktop class="text-white h-8 w-8 m-2" />
          </div>
          <h2 class="mb-2">Desktop Development</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
        </Card>
        <Card>
          <div
            class="rounded-lg bg-white/10 aspect-square w-fit flex justify-center items-center mb-1"
          >
            <IconMobile class="text-white h-8 w-8 m-2" />
          </div>
          <h2 class="mb-2">Mobile Device Management</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
        </Card>
      </div>
    </section>
    <section>
      <h1 class="text-center mb-10">
        Tech I <span class="text-gradient">Work</span> With
      </h1>
    </section>
    <footer class="h-[90rem]"></footer>
  </div>
</template>
