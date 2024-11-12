<template>
  <div>
    <transition-group name="toasts" tag="div" class="toasts-list">
      <toast class="toasts-item" v-for="toast in toasts" :toast="toast" :key="toast.id"></toast>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
  interface ToastOptions {
    id?: number;
    type: string;
    duration?: number;
    text: string;
  }

  let hellos = ["Hello world!", "Bonjour!", "Ahoyhoy!", "Ciao!", "Aloha!"];
  let states = ["success", "danger", "warning", "info"];

  let toastID = 0;
  const toasts = ref<ToastOptions[]>([]);

  function randomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomArrayItem(arr: string[]) {
    return arr[randomInt(0, arr.length - 1)];
  }

  function removeToast(id: number) {
    toasts.value = toasts.value.filter((m) => m.id !== id);
  }

  function addToast({ type = "info", duration = 4000, text = "" }: ToastOptions) {
    const id = toastID++;

    toasts.value.push({ id, type, text });

    setTimeout(() => {
      removeToast(id);
    }, duration);
  }

  onMounted(() => {
    setInterval(() => {
      addToast({ type: randomArrayItem(states), duration: randomInt(1000, 8000), text: randomArrayItem(hellos) });
    }, 1000);
  });
</script>

<style>
  .toasts-enter,
  .toasts-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }

  .toasts-enter-from,
  .toasts-enter-to {
    opacity: 0;
    transform: scale(0.7);
  }

  .toasts-leave-active {
    position: absolute;
    z-index: -1;
  }

  .toasts-list {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    width: 100%;
    max-width: 300px;
  }

  .toasts-item {
    transition: all 0.5s ease;
  }
</style>
