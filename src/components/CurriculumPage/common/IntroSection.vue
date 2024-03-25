<template>
  <section class="introSec fade-transition" :class="{ 'fade-out-down': !show }">
    <section class="introSec__titleSec">
      <h3 class="introSec__title">
        <slot name="heading"></slot>
      </h3>
      <div v-if="useBadge" class="introSec__titleBadge">
        <slot name="badge"></slot>
      </div>
    </section>

    <section v-if="useDetail" class="introSec__detailSec">
      <slot name="detail"></slot>
    </section>
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
    useDetail: {
      type: Boolean,
      required: false,
      defulat: false,
    },
  },
  data() {
    return {
      show: false,
      timeout: null,
    };
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.show = true;
    }, 0);
  },
  beforeUnmount() {
    clearTimeout(this.timeout);
    this.timeout = null;
  },
};
</script>

<style></style>
