<template>
  <div class="crclmSec__wrap">
    <section class="crclmSec crclmSec--data">
      <h3 class="crclmSec__title">데이터 수집 및 시각화</h3>
      <p class="crclmSec__titleText">
        데이터를 <StrongSpan underline>수집</StrongSpan>하고 다양한 그래프로
        <StrongSpan underline>시각화하는 법</StrongSpan>을 배워요
      </p>
      <ul class="crclmSec__crclmList">
        <li class="crclmSec__crclmItem">
          <h4 class="crclmSec__studyTitle">그림 그래프</h4>
          <div class="crclmSec__studyCard">
            <img
              src="@/assets/img/CurriculumPage/codingPage/img_card_cordimg_01.png"
              alt="빛나는 수정 모으기"
            />
            <p>빛나는 수정 모으기</p>
          </div>
        </li>
        <li class="crclmSec__crclmItem">
          <h4 class="crclmSec__studyTitle">가로 막대 그래프</h4>
          <div class="crclmSec__studyCard">
            <img
              src="@/assets/img/CurriculumPage/codingPage/img_card_cordimg_02.png"
              alt="맛있는 쿠키 만들기"
            />
            <p>맛있는 쿠키 만들기</p>
          </div>
        </li>
        <li class="crclmSec__crclmItem">
          <h4 class="crclmSec__studyTitle">세로 막대 그래프</h4>
          <div class="crclmSec__studyCard">
            <img
              src="@/assets/img/CurriculumPage/codingPage/img_card_cordimg_03.png"
              alt="공룡 하우스"
            />
            <p>공룡 하우스</p>
          </div>
        </li>
        <li class="crclmSec__crclmItem">
          <h4 class="crclmSec__studyTitle">파이 그래프</h4>
          <div class="crclmSec__studyCard">
            <img
              src="@/assets/img/CurriculumPage/codingPage/img_card_cordimg_04.png"
              alt="현장 조사 나서기"
            />
            <p>현장 조사 나서기</p>
          </div>
        </li>
      </ul>
    </section>
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
