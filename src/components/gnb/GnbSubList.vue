<template>
  <ul>
    <li v-for="subItem in subItems" :key="subItem.id">
      <router-link :to="`${parent.to}?${subItem.param}`">{{
        subItem.text
      }}</router-link>
    </li>
  </ul>
</template>

<script>
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
};
</script>
