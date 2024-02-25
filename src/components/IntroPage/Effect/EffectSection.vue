<template>
  <section class="effectSec">
    <div class="effectSec__inner">
      <div class="effectSec__titleBox">
        <h3 class="effectSec__title">
          하루 15분, 우리 아이가
          <span><span>똑똑해집니다</span></span>
        </h3>
        <p class="effectSec__titleSub">
          유아 수학・인지 능력의 향상을 확인하였습니다.
        </p>
      </div>
      <img
        class="effectSec__figImg"
        :src="
          require('@/assets/img/IntroPage/effect/jr-pc-section-study-img.png')
        "
        alt="effect-img"
      />
      <div
        class="effectSec__accordion"
        :class="{ 'effectSec__accordion--on': onAccordion }"
      >
        <button class="effectSec__accordionBtn" @click="toggleAccordion">
          <strong>어떻게 연구했나요?</strong>
        </button>
        <div class="effectSec__accordionBody" :class="{ blind: !onAccordion }">
          <p class="accordion-item">
            쥬니버스쿨을 꾸준히 사용한 만 3-6세 아동의 수학능력(수와 연산, 측정,
            기하 영역)과 인지능력(처리속도, 언어이해, 시공간 영역)이 향상됨을
            검증하였습니다.
          </p>
          <ul>
            <li class="accordion-item">
              <strong>[논리]</strong>
              <ul class="study-list">
                <li>
                  <span>연구대상 |&nbsp;</span>
                  <span>3-6세 아동</span>
                </li>
                <li>
                  <span>연구대상 |&nbsp;</span>
                  <span>3-6세 아동</span>
                </li>
                <li>
                  <span>연구대상 |&nbsp;</span>
                  <span>3-6세 아동</span>
                </li>
                <li>
                  <span>연구대상 |&nbsp;</span>
                  <span>
                    서울대 아동가족학과<br />
                    박유정 교수 연구실
                  </span>
                </li>
              </ul>
            </li>
            <li class="accordion-item">
              <strong>[논리]</strong>
              <ul class="study-list">
                <li>
                  <span>연구대상 |&nbsp;</span>
                  <span>3-6세 아동</span>
                </li>
                <li>
                  <span>연구대상 |&nbsp;</span>
                  <span>3-6세 아동</span>
                </li>
                <li>
                  <span>연구대상 |&nbsp;</span>
                  <span>3-6세 아동</span>
                </li>
                <li>
                  <span>연구대상 |&nbsp;</span>
                  <span>
                    중앙대 유아교육과<br />
                    조형숙 교수 연구실
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      onAccordion: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.onAccordion = !this.onAccordion;
    },
  },
};
</script>

<style></style>
