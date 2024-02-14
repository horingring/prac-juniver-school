<template>
  <header class="header flex-center">
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
};
</script>
