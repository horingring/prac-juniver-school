<template>
  <section class="cmtSec">
    <h3 class="cmtSec__title">
      함께 만드는 <StrongSpan underline>전문가</StrongSpan>
    </h3>
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
        <SlideCmtCard :comment="comment" />
      </SwiperSlide>
    </JrSwiper>
  </section>
</template>

<script>
import JrSwiper from '@/components/common/swiper/JrSwiper.vue';
import { SwiperSlide } from 'swiper/vue';
import SlideCmtCard from './SlideCmtCard.vue';
import StrongSpan from '@/components/common/ui/StrongSpan.vue';
import client from 'api-client';

export default {
  components: {
    JrSwiper,
    SwiperSlide,
    SlideCmtCard,
    StrongSpan,
  },
  data() {
    return {
      isLoading: true,
      comments: [],
    };
  },
  created() {
    this.fetchIntroComments();
  },
  methods: {
    async fetchIntroComments() {
      const comments = await client.fetchIntroComments();
      this.comments = comments;
      this.isLoading = false;
    },
  },
};
</script>

<style></style>
