<template>
  <div class="cmtSec__card">
    <div class="cmtSec__cardTextBox">
      <p class="text" v-html="comment.text1"></p>
      <p class="text" v-html="comment.text2"></p>
    </div>
    <div class="cmtSec__cardWriterBox">
      <span class="writer" v-html="comment.name"></span>
      <span class="department" v-html="comment.department"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
