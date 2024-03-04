<template>
  <main id="curriculumPage">
    <MathPage v-if="urlQuery.t === 'math'" />
  </main>
</template>

<script>
import MathPage from './MathPage.vue';

export default {
  components: {
    MathPage,
  },
  computed: {
    urlQuery() {
      return this.$route.query;
    },
  },
};
</script>
