<template>
  <main id="curriculumPage">
    <MathPage v-if="urlQuery.t === 'math'" />
    <CodingPage v-else-if="urlQuery.t === 'coding'" />
    <CurriculumFooter :subject="urlQuery.t" />
  </main>
</template>

<script>
import MathPage from './MathPage.vue';
import CodingPage from './CodingPage.vue';
import CurriculumFooter from '@/components/CurriculumPage/common/CurriculumFooter.vue';

export default {
  components: {
    MathPage,
    CodingPage,
    CurriculumFooter,
  },
  computed: {
    urlQuery() {
      return this.$route.query;
    },
  },
};
</script>
