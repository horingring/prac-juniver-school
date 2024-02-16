<template>
  <div
    class="introSec__downBtnBox"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <button
      class="introSec__dropdownBtn"
      :class="{ 'introSec__dropdownBtn--hover': onHover }"
    >
      앱 다운받기
    </button>
    <ul class="introSec__downBtnList" :class="{ blind: !onHover }">
      <li>
        <a
          href="https://play.google.com/store/apps/details?id=com.nts.edu4k"
          target="_blank"
          class="introSec__downBtn google"
        >
          <span class="blind">구글플레이</span>
        </a>
      </li>
      <li>
        <a
          href="https://apps.apple.com/kr/app/%EC%A5%AC%EB%8B%88%EB%B2%84%EC%8A%A4%EC%BF%A8-%ED%82%A4%EC%A6%88-%EC%BD%94%EB%94%A9-%EC%88%98%ED%95%99-%EB%85%BC%EB%A6%AC-%EC%82%AC%ED%9A%8C%EC%84%B1-%EA%B5%90%EC%9C%A1/id1582434425"
          target="_blank"
          class="introSec__downBtn apple"
        >
          <span class="blind">앱스토어</span>
        </a>
      </li>
      <li>
        <img
          :src="require('@/assets/img/IntroPage/intro/jr-pc-section-5-qr.png')"
          alt="qrImg"
          class="introSec__qrImg"
        />
      </li>
    </ul>
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
