<template>
  <section class="introSec">
    <IntroBgSlide />
    <div class="introSec__inner">
      <IntroDescription />
      <IntroDownBtnBox />
      <button class="introSec__toDownBtn" @click="scrollToRcmdSection"></button>
    </div>
  </section>
</template>

<script>
import IntroBgSlide from './IntroBgSlide.vue';
import IntroDescription from './IntroDescription.vue';
import IntroDownBtnBox from './IntroDownBtnBox.vue';
import { getAbsoluteOffset } from '@/utils/getElementOffset';

export default {
  components: {
    IntroBgSlide,
    IntroDescription,
    IntroDownBtnBox,
  },
  methods: {
    scrollToRcmdSection() {
      const rcmdSec = document.querySelector('.rcmdSec');
      const { top } = getAbsoluteOffset(rcmdSec);
      window.scrollTo(0, top);
    },
  },
};
</script>
