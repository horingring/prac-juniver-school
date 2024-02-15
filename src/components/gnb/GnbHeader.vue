<template>
  <header
    class="header flex-center"
    :class="{
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

export default {
  components: {
    GnbLogo,
    GnbList,
  },
  computed: {
    urlQuery() {
      return this.$route.query;
    },
  },
};
</script>
