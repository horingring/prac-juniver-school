<template>
  <footer class="footer">
    <div class="footer__inner">
      <strong class="footer__logo">
        <span class="blind">쥬니버스쿨</span>
      </strong>
      <FooterLinkList />
      <p class="footer__text">
        쥬니버스쿨은 네이버커넥트재단에서 사회공헌의 일환으로 운영하는 키즈 교육
        플랫폼입니다.
      </p>
      <p class="footer__copyright">© NAVER Connect Foundation.</p>
    </div>
  </footer>
</template>

<script>
import FooterLinkList from './FooterLinkList.vue';

export default {
  components: {
    FooterLinkList,
  },
};
</script>
