<template>
  <section class="introSec">
    <IntroBgSlide />
    <div class="introSec__inner">
      <IntroDescription />
      <IntroDownBtnBox />
      <button class="introSec__toDownBtn"></button>
    </div>
  </section>
</template>

<script>
import IntroBgSlide from './IntroBgSlide.vue';
import IntroDescription from './IntroDescription.vue';
import IntroDownBtnBox from './IntroDownBtnBox.vue';
export default {
  components: {
    IntroBgSlide,
    IntroDescription,
    IntroDownBtnBox,
  },
};
</script>
