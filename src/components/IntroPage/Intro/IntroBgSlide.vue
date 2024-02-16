<template>
  <div
    class="introSec__bgSlide"
    :class="{ 'introSec__bgSlide--on': onRender }"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      onRender: false,
      timer: null,
    };
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.onRender = true;
    }, 0);
  },
  beforeUnmount() {
    clearTimeout(this.timer);
  },
};
</script>
