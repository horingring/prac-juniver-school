<template>
  <section class="rcmdSec">
    <div class="rcmdSec__intro">
      <h3 class="rcmdSec__title">
        먼저 써본<br />
        부모님이<br />
        <StrongSpan underline>추천하는 앱</StrongSpan>
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
    <p class="rcmdSec__spinner" v-if="isLoading && comments.length < 1">
      로딩중...
    </p>
    <JrSwiper
      v-else
      :navigation="true"
      :slides-per-view="'auto'"
      loop
      :autoplay="{ delay: 3000 }"
      :space-between="30"
      centeredSlides
    >
      <SwiperSlide v-for="comment in comments" :key="comment.id">
        <SlideRcmdCard :text="comment.text" :name="comment.name" />
      </SwiperSlide>
    </JrSwiper>
  </section>
</template>

<script>
import JrSwiper from '@/components/common/swiper/JrSwiper.vue';
import { SwiperSlide } from 'swiper/vue';
import SlideRcmdCard from './SlideRcmdCard.vue';
import StrongSpan from '@/components/common/ui/StrongSpan.vue';
import client from 'api-client';

export default {
  components: {
    JrSwiper,
    SwiperSlide,
    SlideRcmdCard,
    StrongSpan,
  },
  data() {
    return {
      isLoading: true,
      comments: [],
    };
  },
  created() {
    this.fetchRcmdComments();
  },
  methods: {
    async fetchRcmdComments() {
      const comments = await client.fetchRcmdComments();
      this.comments = comments;
      this.isLoading = false;
    },
  },
};
</script>
