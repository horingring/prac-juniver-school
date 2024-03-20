<template>
  <div class="codingPage curriculumPage">
    <IntroSection useDetail>
      <template #heading>
        놀이처럼 배우는<br />
        <StrongSpan underline underlineColor="#019bff">코딩의 원리</StrongSpan>
      </template>
      <template #detail>
        <IntroDetail />
      </template>
    </IntroSection>
    <CurriculumSection />
  </div>
</template>

<script>
import IntroSection from '@/components/CurriculumPage/common/IntroSection.vue';
import StrongSpan from '@/components/common/ui/StrongSpan.vue';
import IntroDetail from '@/components/CurriculumPage/codingPage/IntroDetail.vue';
import CurriculumSection from '@/components/CurriculumPage/codingPage/CurriculumSection.vue';
export default {
  components: {
    IntroSection,
    StrongSpan,
    IntroDetail,
    CurriculumSection,
  },
};
</script>

<style></style>
