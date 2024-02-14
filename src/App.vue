<template>
  <GnbHeader />
  <router-view></router-view>
  <FooterComponent />
</template>

<script>
import GnbHeader from '@/components/gnb/GnbHeader.vue';
import FooterComponent from '@/components/common/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    GnbHeader,
    FooterComponent,
  },
};
</script>

<style>
@import '@/assets/styles/reset.css';
@import '@/assets/styles/index.css';
</style>
