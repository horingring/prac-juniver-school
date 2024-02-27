<template>
  <section class="cpsSec">
    <div class="cpsSec__inner">
      <h3 class="cpsSec__title">
        쥬니버스쿨은
        <StrongSpan underline underlineColor="#dbe4f2">
          이렇게 구성되어 있습니다
        </StrongSpan>
      </h3>
      <CompositionBody />
    </div>
  </section>
</template>

<script>
import StrongSpan from '@/components/common/ui/StrongSpan.vue';
import CompositionBody from './CompositionBody.vue';

export default {
  components: {
    StrongSpan,
    CompositionBody,
  },
};
</script>

<style></style>
