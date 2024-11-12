<template>
  <div class="wrapper">
    <toasty />
  </div>
</template>

<script lang="ts" setup>
  const message = ref("Composables");

  function hello() {
    sayHello(message.value);
  }
</script>

<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    height: 100svh;
    font-family: sans-serif;
  }
  #__nuxt {
    height: 100%;
  }
  .wrapper {
    width: 100%;
    height: 100%;
    background-color: #1c2944;
  }
</style>
