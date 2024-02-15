<template>
  <section class="introSec">
    <div class="introSec__bgSlide"></div>
    <div class="introSec__inner">
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
        <p class="introSec__desc2">쥬니버스쿨은 왜 무료일까요?</p>
        <p class="introSec__desc2Sub blind">
          <strong>네이버 커넥트재단은</strong> 네이버에서 설립한 <br />비영리
          교육기관입니다. 우리나라 모든<br />
          어린이들이 최고의 교육 기회를 누릴 수 있도록<br />
          쥬니버스쿨과 같은 프로그램을 만들어 무료로<br />
          나누고 있습니다.
        </p>
      </div>
      <div class="introSec__downBtnBox">
        <button class="introSec__dropdownBtn">앱 다운받기</button>
        <ul class="introSec__downBtnList">
          <li>
            <button class="introSec__googleDownBtn">
              <span class="blind">구글플레이</span>
            </button>
          </li>
          <li>
            <button class="introSec__appleDownBtn">
              <span class="blind">앱스토어</span>
            </button>
          </li>
          <li>
            <img src="" alt="" class="introSec__qrImg" />
          </li>
        </ul>
      </div>
      <button class="introSec__toDownBtn"></button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
