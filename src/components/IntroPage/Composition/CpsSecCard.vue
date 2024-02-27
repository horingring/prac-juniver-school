<template>
  <div class="cpsSec__card">
    <figure>
      <img
        class="cpsSec__cardImg"
        :src="cardInfo.img"
        :alt="`${cardInfo.navItemName}_content-img`"
      />
    </figure>
    <p class="cpsSec__cardText">
      <template v-if="cardInfo.id == 0">
        <StrongSpan color="#00bdfb">아이의 발달 수준</StrongSpan>에 맞춘
        세분화된 레벨로<br />
        학습 콘텐츠를 제공합니다.
      </template>
      <template v-else-if="cardInfo.id == 1">
        하루 15분 분량의
        <StrongSpan color="#ff6f04">오늘의 미션,</StrongSpan><br />
        모든 미션을 자유롭게 선택할 수 있는
        <StrongSpan color="#ff6f04">전체보기 모드</StrongSpan>로<br />
        원하는 방법으로 학습하세요.
      </template>
      <template v-else-if="cardInfo.id == 2">
        보호자페이지에서 아이의 학습 결과는 물론,<br />
        집에서 실천해 볼 수 있는
        <StrongSpan color="#896fe4">학습 지도 TIP</StrongSpan>도 확인할 수
        있어요!
      </template>
      <template v-else-if="cardInfo.id == 3">
        네이버 계정만 있으면
        <StrongSpan color="#a6d935">별도의 기기 대여 없이</StrongSpan> 사용
        가능합니다.<br />
        하나의 계정에 여러 아이를 등록할 수도 있어요.
      </template>
      <template v-else-if="cardInfo.id == 4">
        <StrongSpan color="#ff5c5c">콘텐츠 제한 설정 기능</StrongSpan>으로<br />
        아이의 앱 사용 시간을 스마트하게 약속하세요.
      </template>
    </p>
  </div>
</template>

<script>
import StrongSpan from '@/components/common/ui/StrongSpan.vue';

export default {
  components: {
    StrongSpan,
  },
  props: {
    cardInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
