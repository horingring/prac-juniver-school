<template>
  <div class="crclmSec__wrap">
    <section class="crclmSec crclmSec--discrimination">
      <h3 class="crclmSec__title">
        <StrongSpan class="crclmSec__titleMain">변별</StrongSpan><br />
        <StrongSpan class="crclmSec__titleDesc"
          >이 그림과 같은 것은 무엇일까?</StrongSpan
        >
      </h3>
      <p class="crclmSec__titleText">
        두 개 이상의 그림을 보고 서로 같고 다름을 구별해요
      </p>
      <ul class="crclmSec__crclmList flex-center">
        <li class="flex-center flex-column">
          <p class="crclmSec__studyCardDesc">
            색, 모양, 위치, 방향이<br />
            같은 것을 찾아요
          </p>
          <div class="crclmSec__studyCard">
            <img
              src="@/assets/img/CurriculumPage/logicPage/img_card_logic_01.png"
              alt="빵이 먹고 싶어요"
            />
            <p>빵이 먹고 싶어요</p>
          </div>
        </li>
        <li class="flex-center flex-column">
          <p class="crclmSec__studyCardDesc">
            부분을 보고<br />
            전체 그림을 찾아요
          </p>
          <div class="crclmSec__studyCard">
            <img
              src="@/assets/img/CurriculumPage/logicPage/img_card_logic_02.png"
              alt="꼭꼭 숨어라, 무늬 보일라"
            />
            <p>꼭꼭 숨어라, 무늬 보일라</p>
          </div>
        </li>
        <li class="flex-center flex-column">
          <p class="crclmSec__studyCardDesc">
            전체 그림의<br />
            부분 조각을 찾아요
          </p>
          <div class="crclmSec__studyCard">
            <img
              src="@/assets/img/CurriculumPage/logicPage/img_card_logic_03.png"
              alt="뚝딱뚝딱 공사장"
            />
            <p>뚝딱뚝딱 공사장</p>
          </div>
        </li>
      </ul>
    </section>

    <section class="crclmSec crclmSec--memory">
      <h3 class="crclmSec__title">
        <StrongSpan class="crclmSec__titleMain">기억</StrongSpan><br />
        <StrongSpan class="crclmSec__titleDesc"
          >내가 본 것은 무엇일까?</StrongSpan
        >
      </h3>
      <p class="crclmSec__titleText">보았던 것을 기억하며 집중력을 길러요</p>
      <ul class="crclmSec__crclmList flex-center">
        <li class="flex-center flex-column">
          <p class="crclmSec__studyCardDesc">내가 본 것을 기억해요</p>
          <div class="crclmSec__studyCard">
            <img
              src="@/assets/img/CurriculumPage/logicPage/img_card_logic_04.png"
              alt="냠냠 피자 놀이"
            />
            <p>냠냠 피자 놀이</p>
          </div>
        </li>
        <li class="flex-center flex-column">
          <p class="crclmSec__studyCardDesc">색깔의 순서를 기억해요</p>
          <div class="crclmSec__studyCard">
            <img
              src="@/assets/img/CurriculumPage/logicPage/img_card_logic_05.png"
              alt="알록달록 드럼을 쳐요"
            />
            <p>알록달록 드럼을 쳐요</p>
          </div>
        </li>
        <li class="flex-center flex-column">
          <p class="crclmSec__studyCardDesc">위치나 장면을 기억해요</p>
          <div class="crclmSec__studyCard">
            <img
              src="@/assets/img/CurriculumPage/logicPage/img_card_logic_06.png"
              alt="버스 탄 순서를 외워보자"
            />
            <p>버스 탄 순서를 외워보자</p>
          </div>
        </li>
      </ul>
    </section>

    <section class="crclmSec crclmSec--grouping">
      <h3 class="crclmSec__title">
        <StrongSpan class="crclmSec__titleMain">범주화</StrongSpan><br />
        <StrongSpan class="crclmSec__titleDesc"
          >어떻게 묶을 수 있을까?</StrongSpan
        >
      </h3>
      <p class="crclmSec__titleText">
        서로 다른 생김새의 물건을 같은 기준으로 묶어 그룹화하는 능력을 길러요
      </p>
      <ul class="crclmSec__crclmList flex-center">
        <li class="flex-center flex-column">
          <div class="crclmSec__studyCard">
            <img
              src="@/assets/img/CurriculumPage/logicPage/img_card_logic_07.png"
              alt="동물 친구를 찾아라"
            />
            <p>동물 친구를 찾아라</p>
          </div>
        </li>
        <li class="flex-center flex-column">
          <div class="crclmSec__studyCard">
            <img
              src="@/assets/img/CurriculumPage/logicPage/img_card_logic_08.png"
              alt="탈것을 찾아라"
            />
            <p>탈것을 찾아라</p>
          </div>
        </li>
        <li class="flex-center flex-column">
          <div class="crclmSec__studyCard">
            <img
              src="@/assets/img/CurriculumPage/logicPage/img_card_logic_09.png"
              alt="오늘은 빨래하는 날"
            />
            <p>오늘은 빨래하는 날</p>
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
