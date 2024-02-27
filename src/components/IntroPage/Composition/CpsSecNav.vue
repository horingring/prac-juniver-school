<template>
  <nav class="cpsSec__nav">
    <ul>
      <li v-for="card in cardList" :key="card.id">
        <a
          class="flex-center"
          :class="{ 'cpsSec__nav--on': card.id == selectedId }"
          href="#"
          @click.prevent="onClickNavItem(card.id)"
        >
          <img
            :src="card.id != selectedId ? card.navItemImg : card.navItemImgOn"
            :alt="`navItem_${card.navItemName}`"
          />
          <span>{{ card.navItemName }}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    cardList: {
      type: Array,
      required: true,
    },
    selectedId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onClickNavItem(id) {
      this.$emit('changeSelected', id);
    },
  },
};
</script>

<style></style>
