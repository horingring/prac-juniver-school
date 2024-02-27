<template>
  <div class="rcmdSec__card">
    <p class="text">{{ text }}</p>
    <p class="name">- {{ name }} -</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
