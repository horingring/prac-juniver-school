<template>
  <main id="curriculumPage">
    <MathPage v-if="urlQuery.t === 'math'" />
    <CodingPage v-else-if="urlQuery.t === 'coding'" />
    <LogicPage v-else-if="urlQuery.t === 'logic'" />
    <CurriculumFooter :subject="urlQuery.t" />
  </main>
</template>

<script>
import MathPage from './MathPage.vue';
import CodingPage from './CodingPage.vue';
import LogicPage from './LogicPage.vue';
import CurriculumFooter from '@/components/CurriculumPage/common/CurriculumFooter.vue';

export default {
  components: {
    MathPage,
    CodingPage,
    LogicPage,
    CurriculumFooter,
  },
  computed: {
    urlQuery() {
      return this.$route.query;
    },
  },
};
</script>
