<template>
  <li class="header__gnbItem">
    <template v-if="!item.target">
      <router-link
        :to="item.to"
        class="header__gnbItemLink flex-center"
        :class="{
          'header__gnbItemLink--on': isOnGnb(item),
        }"
        @mouseenter="onMouseEnter(item)"
        >{{ item.text }}</router-link
      >
      <GnbSubList
        v-if="item.subItems?.length > 0"
        :subItems="item.subItems"
        :parent="item"
      />
    </template>
    <template v-else>
      <a
        :href="item.to"
        :target="item.target"
        class="header__gnbItemLink flex-center"
        :class="{
          'header__gnbItemLink--on': isOnGnb(item),
        }"
        @mouseenter="onMouseEnter(item)"
        >{{ item.text }}</a
      >
    </template>
  </li>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import GnbSubList from './GnbSubList.vue';

export default {
  props: {
    item: {
      required: true,
      type: Object,
    },
  },
  components: {
    GnbSubList,
  },
  computed: {
    urlPath() {
      return this.$route.path;
    },
    ...mapState('common', ['hoveredGnb']),
  },
  methods: {
    ...mapMutations('common', ['setHoveredGnb']),
    onMouseEnter(item) {
      this.setHoveredGnb(item);
    },
    isOnGnb(item) {
      return this.hoveredGnb
        ? this.hoveredGnb.id == item.id
        : this.urlPath === item.to;
    },
  },
};
</script>
