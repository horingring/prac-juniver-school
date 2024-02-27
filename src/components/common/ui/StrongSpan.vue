<template>
  <span class="strongBox">
    <strong class="strongBox__text" :style="{ color: color ? color : null }">
      <slot></slot>
    </strong>
    <span
      v-if="underline"
      class="strongBox__underline"
      :style="{
        'background-color': underlineColor ? underlineColor : null,
      }"
    ></span>
  </span>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: undefined,
    },
    underline: {
      type: Boolean,
      required: false,
      default: false,
    },
    underlineColor: {
      type: String,
      required: false,
      default: undefined,
    },
  },
};
</script>

<style></style>
