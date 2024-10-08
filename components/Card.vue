<template>
  <div
    class="bg-white bg-opacity-[5%] backdrop-blur-xl rounded-lg p-4 shadow-md hover:border-gradient duration-700"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>
