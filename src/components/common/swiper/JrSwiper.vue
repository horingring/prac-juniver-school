<template>
  <Swiper
    :class="vClass"
    :modules="[navigationModule, autoplayModule]"
    :slides-per-view="slidesPerView"
    :initial-slide="0"
    :loop="loop"
    :autoplay="autoplay"
    :space-between="spaceBetween"
    :centeredSlides="centeredSlides"
    :navigation="navigation"
  >
    <slot></slot>
  </Swiper>
</template>

<script>
import { Swiper } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

export default {
  components: {
    Swiper,
  },
  props: {
    vClass: {
      type: [String, Object],
      required: false,
      default: '',
    },
    slidesPerView: {
      type: [String, Number],
      required: false,
      defualt: undefined,
    },
    initialSlide: {
      type: [Number, String],
      required: false,
      default: 0,
    },
    loop: {
      type: Boolean,
      required: false,
      default: false,
    },
    autoplay: {
      type: Object,
      required: false,
      default: () => {},
    },
    spaceBetween: {
      type: [Number, String],
      required: false,
      default: 0,
    },
    centeredSlides: {
      type: Boolean,
      required: false,
      default: false,
    },
    navigation: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    navigationModule() {
      return Navigation;
    },
    autoplayModule() {
      return Autoplay;
    },
  },
};
</script>

<style></style>
