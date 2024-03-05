<template>
  <footer class="crclmFooter" :class="[`crclmFooter--${subject}`]">
    <ul class="crclmFooter__fellowList">
      <li>
        <h4 class="crclmFooter__fellowTitle">콘텐츠<br />개발 협력</h4>
        <img
          :src="
            require('@/assets/img/CurriculumPage/mathPage/logo_factoshule.png')
          "
          alt="logo_factoshule"
          class="crclmFooter__fellowImg"
        />
      </li>
      <li>
        <h4 class="crclmFooter__fellowTitle">함께 만드는<br />전문가</h4>
        <p class="crclmFooter__fellows">
          서울대학교 아동가족학과 <strong>박유정 교수 연구팀</strong><br />
          중앙대학교 유아교육과 <strong>조형숙 교수 연구팀</strong><br />
          세브란스병원 소아정신과 <strong>천근아 교수 연구팀</strong>
        </p>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  props: {
    subject: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
