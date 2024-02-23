<template>
  <main id="introPage">
    <IntroSection />
    <RecommendSection />
  </main>
</template>

<script>
import IntroSection from '@/components/IntroPage/Intro/IntroSection.vue';
import RecommendSection from '@/components/IntroPage/Recommend/RecommendSection.vue';

export default {
  components: {
    IntroSection,
    RecommendSection,
  },
};
</script>
