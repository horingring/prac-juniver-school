<template>
  <div class="introSec__detailWrap">
    <ul class="introSec__detailList">
      <li class="introSec__detailCard info1">
        <h4>
          아이의 선택에 따라<br />
          스토리가 진행되는
          <StrongSpan color="#ff6f97">인터랙티브 콘텐츠</StrongSpan><br />
        </h4>
      </li>
      <li class="introSec__detailCard info2">
        <h4>
          아이들의 호기심을 자극하는<br />
          <StrongSpan color="#ff6f97">20가지</StrongSpan>
          실생활 문제!
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
