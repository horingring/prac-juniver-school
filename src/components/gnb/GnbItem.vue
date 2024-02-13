<template>
  <li>
    <template v-if="!item.target">
      <router-link :to="item.to">{{ item.text }}</router-link>
      <GnbSubList
        v-if="item.subItems && item.subItems.length > 0"
        :subItems="item.subItems"
        :parent="item"
      />
    </template>
    <template v-else>
      <a :href="item.to" :target="item.target">{{ item.text }}</a>
    </template>
  </li>
</template>

<script>
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
};
</script>
