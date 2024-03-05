<template>
  <section class="introSec fade-transition" :class="{ 'fade-out-down': !show }">
    <h3 class="introSec__title">
      <slot name="heading"></slot>
    </h3>
    <div v-if="useBadge" class="introSec__titleBadge">
      <slot name="badge"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    useBadge: {
      type: Boolean,
      required: false,
      defulat: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style></style>
