<template>
  <main id="introPage">
    <IntroSection />
    <RecommendSection />
    <EffectSection />
    <CompositionSection />
    <CommentSection />
  </main>
</template>

<script>
import IntroSection from '@/components/IntroPage/Intro/IntroSection.vue';
import RecommendSection from '@/components/IntroPage/Recommend/RecommendSection.vue';
import EffectSection from '@/components/IntroPage/Effect/EffectSection.vue';
import CompositionSection from '@/components/IntroPage/Composition/CompositionSection.vue';
import CommentSection from '@/components/IntroPage/Comment/CommentSection.vue';

export default {
  components: {
    IntroSection,
    RecommendSection,
    EffectSection,
    CompositionSection,
    CommentSection,
  },
};
</script>
