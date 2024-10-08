<template>
  <div
    class="bg-white bg-opacity-[2.5%] backdrop-blur-xl rounded-lg p-4 shadow-md hover:bg-blue duration-700"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>
