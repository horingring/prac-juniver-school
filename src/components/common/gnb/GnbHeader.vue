<template>
  <header
    class="header flex-center"
    :class="{
      'header--hide': !show,
      'header--yellow': urlQuery.t == 'level1',
      'header--skyblue': urlQuery.t == 'level2',
    }"
  >
    <nav class="header__nav flex-center">
      <GnbLogo />
      <GnbList />
    </nav>
  </header>
</template>

<script>
import GnbLogo from './GnbLogo.vue';
import GnbList from './GnbList.vue';
import { debounce } from 'lodash';

export default {
  components: {
    GnbLogo,
    GnbList,
  },
  data() {
    return {
      show: true,
      lastScrollTop: 0,
    };
  },
  computed: {
    urlQuery() {
      return this.$route.query;
    },
  },
  created() {
    this.debouncedOnScroll = debounce(this.onScroll, 50);
    window.addEventListener('scroll', this.debouncedOnScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.debouncedOnScroll);
  },
  methods: {
    onScroll() {
      // 스크롤 down
      const currentScroll = window.scrollY;
      if (currentScroll > this.lastScrollTop) {
        this.show = false;
      }
      // 스크롤 up
      else {
        this.show = true;
      }
      this.lastScrollTop = currentScroll;
    },
  },
};
</script>
