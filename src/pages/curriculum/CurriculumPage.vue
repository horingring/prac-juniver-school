<template>
  <main id="curriculumPage">
    <MathPage v-if="urlQuery.t === 'math'" />
    <CurriculumFooter :subject="urlQuery.t" />
  </main>
</template>

<script>
import MathPage from './MathPage.vue';
import CurriculumFooter from '@/components/CurriculumPage/common/CurriculumFooter.vue';

export default {
  components: {
    MathPage,
    CurriculumFooter,
  },
  computed: {
    urlQuery() {
      return this.$route.query;
    },
  },
};
</script>
