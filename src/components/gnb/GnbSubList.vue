<template>
  <ul
    class="header__gnbSubList flex-center"
    :class="{
      blind: isBlind(parent),
      curriculum: isCurriculum(parent.to),
      workbook: isWorkbook(parent.to),
    }"
  >
    <li
      v-for="subItem in subItems"
      :key="subItem.id"
      class="header__gnbSubItem"
    >
      <router-link
        :to="`${parent.to}?${subItem.param}`"
        class="header__gnbSubItemLink flex-center"
        :class="[`header__gnbSubItemLink--${subItem.id}`]"
        >{{ subItem.text }}</router-link
      >
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    subItems: {
      required: true,
      type: Array,
    },
    parent: {
      required: false,
      type: Object,
    },
  },
  computed: {
    ...mapState('common', ['hoveredGnb']),
    urlPath() {
      return this.$route.path;
    },
  },
  methods: {
    isBlind(parent) {
      return this.hoveredGnb
        ? !(
            this.hoveredGnb.id == parent.id &&
            this.hoveredGnb.subItems?.length > 0
          )
        : this.urlPath !== parent.to;
    },
    isCurriculum(to) {
      return to.includes('curriculum');
    },
    isWorkbook(to) {
      return to.includes('workbook');
    },
  },
};
</script>
