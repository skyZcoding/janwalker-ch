<script setup lang="ts">
const links = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Qualities",
    link: "#qualities",
  },
];

const experiences = [
  {
    title: "Computer scientist in software development EFZ",
    company: "Roche Diagnostics International AG",
    date: "Aug. 2018 - Aug. 2022",
  },
  {
    title: "Junior software developer",
    company: "Roche Diagnostics International AG",
    date: "Aug. 2022 - Aug. 2023",
  },
  {
    title: "Course instructor",
    company: "Roche Diagnostics International AG",
    date: "Sep. 2022 - Dec. 2022",
  },
  {
    title: "Co-Owner",
    company: "Codelance GmbH",
    date: "Apr. 2023 - Present",
  },
];
</script>

<template>
  <div class="bg-dark-gray w-full">
    <header class="w-full py-4 flex justify-center mb-8">
      <div class="flex flex-row items-center">
        <div v-for="(link, index) in links" :key="index" class="mx-2">
          <NuxtLink :to="link.link" class="align-middle scroll-smooth">
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

    <section id="home">
      <div class="flex flex-col md:flex-row">
        <div
          class="flex flex-col w-fit justify-center md:pr-8 lg:pr-12 items-start"
        >
          <h1>
            Building <span class="text-gradient">Seamless</span> Web
            Applications
          </h1>
          <p class="text-gray-300 text-base mt-4">
            I am a full-stack software developer with six years of professional
            experience. I love trying out new technologies, mainly in web
            development.
          </p>
          <Button class="mt-2">Learn more</Button>
        </div>
        <div
          class="w-auto md:min-w-96 flex justify-center items-center mt-4 md:mt-0"
        >
          <NuxtImg src="/images/hero.svg" alt="Hero Image" />
        </div>
      </div>

      <div class="mt-24">
        <h4 class="font-bold text-center w-100 mb-4">Tech I Work With</h4>

        <div
          class="w-full gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center"
        >
          <IconNuxt class="text-neutral-lightGray max-h-12 w-full" />
          <IconVue class="text-neutral-lightGray max-h-12 w-full" />
          <IconDotNet class="text-neutral-lightGray max-h-12 w-full" />
          <IconBlazor class="text-neutral-lightGray max-h-12 w-full" />
          <IconDocker class="text-neutral-lightGray max-h-12 w-full" />
        </div>
      </div>
    </section>

    <section id="experience">
      <h1 class="text-center mb-10">
        My <span class="text-gradient">Experience</span>
      </h1>
      <div class="grid grid-cols-1 auto-rows-fr">
        <div
          v-for="(experience, index) in experiences"
          :key="index"
          class="w-full flex flex-row border-b border-neutral-lightGray py-4 justify-between items-center"
        >
          <div class="flex flex-row items-center">
            <p class="font-semibold text-neutral-lightGray mr-10">
              0{{ index + 1 }}
            </p>
            <h1
              class="font-bold text-neutral-lightGray w-[12rem] sm:w-[25rem] text-xl sm:text-2xl lg:text-3xl"
            >
              {{ experience.title }}
            </h1>
          </div>
          <div class="flex flex-col justify-start mr-10 w-[20rem]">
            <p class="text-neutral-lightGray">{{ experience.company }}</p>
            <p class="text-neutral-lightGray">{{ experience.date }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="qualities">
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
            I specialize in creating dynamic and responsive web applications
            using modern frameworks like Nuxt, Vue, and Blazor. My expertise in
            these technologies allows me to build seamless user interfaces and
            efficient client-side logic, ensuring a smooth and engaging user
            experience.
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
            I build reliable backends using .NET with C# and Node.js with
            TypeScript. With .NET, I create scalable server-side apps, and with
            Node.js, I develop fast, asynchronous services. These skills help me
            deliver solid backend solutions for various projects.
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
            I develop desktop applications using Windows Presentation Foundation
            (WPF) with C#. My experience with WPF allows me to create rich,
            visually appealing, and highly interactive desktop applications. I
            focus on delivering robust and user-friendly solutions that meet the
            specific needs of each project.
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
            I have experience developing mobile device management (MDM)
            solutions using VMware Workspace One. With Workspace One, I manage
            and secure mobile devices, apps, and data, ensuring compliance and
            protecting corporate resources. My expertise in MDM helps
            organizations streamline device management and enhance security.
          </p>
        </Card>
      </div>
    </section>

    <footer class="h-[90rem]"></footer>
  </div>
</template>
