<template>
  <main id="curriculumPage">
    <MathPage v-if="urlQuery.t === 'math'" />
    <CodingPage v-else-if="urlQuery.t === 'coding'" />
    <LogicPage v-else-if="urlQuery.t === 'logic'" />
    <LabPage v-else-if="urlQuery.t === 'lab'" />
    <CurriculumFooter :subject="urlQuery.t" />
  </main>
</template>

<script>
import MathPage from './MathPage.vue';
import CodingPage from './CodingPage.vue';
import LogicPage from './LogicPage.vue';
import LabPage from './LabPage.vue';
import CurriculumFooter from '@/components/CurriculumPage/common/CurriculumFooter.vue';

export default {
  components: {
    MathPage,
    CodingPage,
    LogicPage,
    LabPage,
    CurriculumFooter,
  },
  computed: {
    urlQuery() {
      return this.$route.query;
    },
  },
};
</script>
