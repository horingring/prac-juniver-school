<template>
  <div class="introSec__detailWrap">
    <ul class="introSec__detailList">
      <li class="introSec__detailCard info1">
        <h4>
          <StrongSpan color="#019bff">12가지</StrongSpan><br />
          직업관련 스토리로 재미있게!
        </h4>
        <p>로봇 공학자, 건축가, 디자이너, 댄서 …</p>
      </li>
      <li class="introSec__detailCard info2">
        <h4>
          <StrongSpan color="#019bff">4가지</StrongSpan><br />
          학습 유형과 함께<br />
          자라나는 공학적 사고력!
        </h4>
      </li>
    </ul>
  </div>
</template>

<script>
import StrongSpan from '@/components/common/ui/StrongSpan.vue';

export default {
  components: {
    StrongSpan,
  },
};
</script>

<style></style>
