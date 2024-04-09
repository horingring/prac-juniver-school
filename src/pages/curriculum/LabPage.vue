<template>
  <div class="labPage curriculumPage">
    <IntroSection useDetail>
      <template #heading>
        데이터, 인공지능 등<br />
        <StrongSpan underline underlineColor="#ff7fa3">과학 기술로</StrongSpan>
        문제를 해결해요
      </template>
      <template #detail>
        <IntroDetail />
      </template>
    </IntroSection>
  </div>
</template>

<script>
import IntroSection from '@/components/CurriculumPage/common/IntroSection.vue';
import StrongSpan from '@/components/common/ui/StrongSpan.vue';
import IntroDetail from '@/components/CurriculumPage/labPage/IntroDetail.vue';

export default {
  components: {
    IntroSection,
    StrongSpan,
    IntroDetail,
  },
};
</script>

<style></style>
