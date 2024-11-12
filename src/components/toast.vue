<template>
  <div :class="['toasts__item', 'toasts__item--' + toast.type]">
    <span class="toasts__item-text">{{ toast.text }}</span>
  </div>
</template>

<script lang="ts" setup>
  defineProps(["toast"]);
</script>

<style scoped>
  .toasts__item {
    display: flex;
    align-items: center;

    width: 100%;
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 5px;

    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .toasts__item-text {
    font-size: 14px;
    line-height: 1.5;
  }

  .toasts__item--success {
    background-color: #51b420;
  }

  .toasts__item--danger {
    background-color: #e75b2c;
  }

  .toasts__item--warning {
    background-color: #d4b431;
  }

  .toasts__item--info {
    background-color: #56b4da;
  }
</style>
