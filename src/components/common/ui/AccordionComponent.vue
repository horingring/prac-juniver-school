<template>
  <div class="accordion" :class="{ on: isShow }">
    <section
      class="accordion__header"
      :class="{ 'accordion__header--headerAsBtn': headerAsBtn }"
      @click="onClickHeader"
    >
      <div class="accordion__headerText">
        <slot name="header"></slot>
      </div>
      <button @click.stop="toggleAccordion" class="accordion__btn flex-center">
        <span class="accordion__btnText" :class="{ blind: btnTextBlind }">
          {{ isShow ? btnTextOn : btnTextOff }}
        </span>
      </button>
    </section>
    <section v-show="isShow" class="accordion__body">
      <slot name="body"></slot>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    show: {
      type: Boolean,
      required: false,
      default: false,
    },
    headerAsBtn: {
      type: Boolean,
      required: false,
      default: false,
    },
    btnTextBlind: {
      type: Boolean,
      required: false,
      default: false,
    },
    btnTextOn: {
      type: String,
      required: false,
      default: 'Close',
    },
    btnTextOff: {
      type: String,
      required: false,
      default: 'Open',
    },
  },
  created() {
    if (this.show) this.isShow = true;
  },
  methods: {
    onClickHeader() {
      if (this.headerAsBtn) this.toggleAccordion();
    },
    toggleAccordion() {
      this.isShow = !this.isShow;
    },
  },
};
</script>

<style></style>
