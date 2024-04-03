<template>
  <div class="logicPage curriculumPage">
    <IntroSection useBadge>
      <template #heading>
        인지 자극 쑥쑥!<br />
        <StrongSpan underline underlineColor="#8d7fe4"
          >사고력과 문제 해결력</StrongSpan
        >을 길러요
      </template>
      <template #badge>
        <p class="introSec__titleBadgeText">
          서울대학교 아동가족학과<br />
          박유정 교수 연구팀
        </p>
      </template>
    </IntroSection>
    <CurriculumSectionWrap />
  </div>
</template>

<script>
import IntroSection from '@/components/CurriculumPage/common/IntroSection.vue';
import CurriculumSectionWrap from '@/components/CurriculumPage/logicPage/CurriculumSectionWrap.vue';
import StrongSpan from '@/components/common/ui/StrongSpan.vue';

export default {
  components: {
    IntroSection,
    CurriculumSectionWrap,
    StrongSpan,
  },
};
</script>

<style></style>
