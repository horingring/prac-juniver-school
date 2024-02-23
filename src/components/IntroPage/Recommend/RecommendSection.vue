<template>
  <section class="rcmdSec">
    <div class="rcmdSec__intro">
      <h3 class="rcmdSec__title">
        먼저 써본<br />
        부모님이<br />
        <span>
          <span class="text">추천하는 앱</span>
        </span>
      </h3>
      <div class="rcmdSec__awardWrap">
        <img
          class="rcmdSec__awardsImg"
          :src="
            require('@/assets/img/IntroPage/recommend/jr-pc-section-1-img-v3.png')
          "
          alt="awards-list"
        />
        <ul class="blind">
          <li>스마트앱 이노베이션 대상</li>
          <li>iF Design Awards 2개 부문 본상</li>
          <li>A.N.D Award 교육 부문 Grand Prix</li>
        </ul>
      </div>
    </div>
    <Swiper
      :modules="[navigation]"
      :slides-per-view="'auto'"
      :space-between="30"
      :navigation="true"
      :loop="true"
      :centeredSlides="true"
      :autoplay="{ delay: 3000 }"
      :initial-slide="0"
    >
      <SwiperSlide>
        <div class="rcmdSec__card">
          <p class="text">집콕육아에 빛이 되어주는 학습 앱</p>
          <p class="name">- 인스타그램 syu****님 -</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="rcmdSec__card">
          <p class="text">집콕육아에 빛이 되어주는 학습 앱</p>
          <p class="name">- 인스타그램 syu****님 -</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="rcmdSec__card">
          <p class="text">집콕육아에 빛이 되어주는 학습 앱</p>
          <p class="name">- 인스타그램 syu****님 -</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="rcmdSec__card">
          <p class="text">집콕육아에 빛이 되어주는 학습 앱</p>
          <p class="name">- 인스타그램 syu****님 -</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="rcmdSec__card">
          <p class="text">집콕육아에 빛이 되어주는 학습 앱</p>
          <p class="name">- 인스타그램 syu****님 -</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="rcmdSec__card">
          <p class="text">집콕육아에 빛이 되어주는 학습 앱</p>
          <p class="name">- 인스타그램 syu****님 -</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="rcmdSec__card">
          <p class="text">집콕육아에 빛이 되어주는 학습 앱</p>
          <p class="name">- 인스타그램 syu****님 -</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="rcmdSec__card">
          <p class="text">집콕육아에 빛이 되어주는 학습 앱</p>
          <p class="name">- 인스타그램 syu****님 -</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    navigation() {
      return Navigation;
    },
  },
};
</script>
