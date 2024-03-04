<template>
  <AccordionComponent :show="stepInfo.id === 0" btnTextBlind>
    <template #header>
      <strong>Step {{ stepInfo.step }}</strong>
      <p v-html="stepInfo.title"></p>
    </template>
    <template #body>
      <ul class="crclmSec__detailList">
        <li v-for="detail in stepInfo.details" :key="detail.id">
          <h4>{{ detail.title }}</h4>
          <p v-html="detail.content"></p>
        </li>
      </ul>
      <ul class="crclmSec__imgList">
        <li v-for="imgInfo in stepInfo.imgs" :key="imgInfo.id">
          <div class="crclmSec__imgWrap">
            <img :src="imgInfo.img" :alt="imgInfo.title" />
          </div>
          <p>{{ imgInfo.title }}</p>
        </li>
      </ul>
    </template>
  </AccordionComponent>
</template>

<script>
import AccordionComponent from '@/components/common/ui/AccordionComponent.vue';

export default {
  components: {
    AccordionComponent,
  },
  props: {
    stepInfo: {
      type: Object,
      requied: true,
    },
  },
};
</script>

<style></style>
