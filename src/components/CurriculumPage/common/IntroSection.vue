<template>
  <section class="introSec">
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
};
</script>

<style></style>
