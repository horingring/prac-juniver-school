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
    <JrSwiper
      :navigation="true"
      :slides-per-view="'auto'"
      loop
      :autoplay="{ delay: 3000 }"
      :space-between="30"
      centeredSlides
    >
      <SwiperSlide v-for="comment in comments" :key="comment.id">
        <SlideCard :text="comment.text" :name="comment.name" />
      </SwiperSlide>
    </JrSwiper>
  </section>
</template>

<script>
import JrSwiper from '@/components/common/swiper/JrSwiper.vue';
import { SwiperSlide } from 'swiper/vue';
import SlideCard from './slideCard.vue';

export default {
  components: {
    JrSwiper,
    SwiperSlide,
    SlideCard,
  },
  data() {
    return {
      comments: [
        {
          id: 0,
          text: '학습을 놀이로 착각할 정도로 유아동을 위한 배려가 눈에 띈다',
          name: '스마트앱어워드 심사평',
        },
        {
          id: 1,
          text: '학습을 놀이로 착각할 정도로 유아동을 위한 배려가 눈에 띈다',
          name: '스마트앱어워드 심사평',
        },
        {
          id: 2,
          text: '학습을 놀이로 착각할 정도로 유아동을 위한 배려가 눈에 띈다',
          name: '스마트앱어워드 심사평',
        },
        {
          id: 3,
          text: '학습을 놀이로 착각할 정도로 유아동을 위한 배려가 눈에 띈다',
          name: '스마트앱어워드 심사평',
        },
        {
          id: 4,
          text: '학습을 놀이로 착각할 정도로 유아동을 위한 배려가 눈에 띈다',
          name: '스마트앱어워드 심사평',
        },
        {
          id: 5,
          text: '학습을 놀이로 착각할 정도로 유아동을 위한 배려가 눈에 띈다',
          name: '스마트앱어워드 심사평',
        },
        {
          id: 6,
          text: '학습을 놀이로 착각할 정도로 유아동을 위한 배려가 눈에 띈다',
          name: '스마트앱어워드 심사평',
        },
        {
          id: 7,
          text: '학습을 놀이로 착각할 정도로 유아동을 위한 배려가 눈에 띈다',
          name: '스마트앱어워드 심사평',
        },
      ],
    };
  },
};
</script>
