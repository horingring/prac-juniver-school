<template>
  <main id="introPage">
    <IntroSection />
    <RecommendSection />
    <EffectSection />
  </main>
</template>

<script>
import IntroSection from '@/components/IntroPage/Intro/IntroSection.vue';
import RecommendSection from '@/components/IntroPage/Recommend/RecommendSection.vue';
import EffectSection from '@/components/IntroPage/Effect/EffectSection.vue';

export default {
  components: {
    IntroSection,
    RecommendSection,
    EffectSection,
  },
};
</script>
