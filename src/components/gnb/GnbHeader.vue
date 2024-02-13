<template>
  <header>
    <nav>
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
