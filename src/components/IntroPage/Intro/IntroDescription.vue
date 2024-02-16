<template>
  <div>
    <h1 class="introSec__titleBox">
      <p>배움이 즐거울 수 있도록</p>
      <img
        :src="require('@/assets/img/IntroPage/intro/logo-spot.png')"
        alt="쥬니버스쿨 로고"
        class="introSec__titleImg"
      />
    </h1>
    <p class="introSec__desc1">
      아이들이 하는 거니까,<br />
      광고도 없고 추가 결제도 없습니다.
    </p>
    <div class="introSec__desc2Box">
      <p
        class="introSec__desc2"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      >
        쥬니버스쿨은 왜 무료일까요?
      </p>
      <p class="introSec__desc2Sub" :class="{ blind: !onHover }">
        <strong>네이버 커넥트재단은</strong> 네이버에서 설립한 <br />비영리
        교육기관입니다. 우리나라 모든<br />
        어린이들이 최고의 교육 기회를 누릴 수 있도록<br />
        쥬니버스쿨과 같은 프로그램을 만들어 무료로<br />
        나누고 있습니다.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onHover: false,
    };
  },
  methods: {
    onMouseEnter() {
      this.onHover = true;
    },
    onMouseLeave() {
      this.onHover = false;
    },
  },
};
</script>
