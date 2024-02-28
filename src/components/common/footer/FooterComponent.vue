<template>
  <footer class="footer">
    <div class="footer__inner">
      <strong class="footer__logo">
        <span class="blind">쥬니버스쿨</span>
      </strong>
      <ul class="footer__linkList">
        <li class="footer__storeLinkItem">
          <div>
            <a
              class="footer__link"
              v-for="store in storeList"
              :key="store.id"
              :href="store.url"
              target="_blank"
            >
              <span class="blind">{{ store.name }}</span>
            </a>
          </div>
        </li>
        <li v-for="link in linkList" :key="link.id">
          <a class="footer__link" :href="link.url" target="_blank">
            <img
              class="footer__linkLogo"
              :src="link.img"
              :alt="`${link.name}-logo`"
            />
            <span class="blind">{{ link.name }}</span>
          </a>
        </li>
      </ul>
      <p class="footer__text">
        쥬니버스쿨은 네이버커넥트재단에서 사회공헌의 일환으로 운영하는 키즈 교육
        플랫폼입니다.
      </p>
      <p class="footer__copyright">© NAVER Connect Foundation.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      storeList: [
        {
          id: 0,
          name: '앱스토어',
          url: 'https://play.google.com/store/apps/details?id=com.nts.edu4k',
        },
        {
          id: 1,
          name: '구글플레이',
          url: 'https://play.google.com/store/apps/details?id=com.nts.edu4k',
        },
      ],
      linkList: [
        {
          id: 0,
          name: '블로그',
          url: 'https://blog.naver.com/jrnaver',
          img: require('@/assets/img/common/footer/ico_footer_blog.png'),
        },
        {
          id: 1,
          name: '유튜브',
          url: 'https://www.youtube.com/@Juniver_official',
          img: require('@/assets/img/common/footer/ico_footer_ytube.png'),
        },
        {
          id: 2,
          name: '인스타그램',
          url: 'https://www.instagram.com/juniver_official/',
          img: require('@/assets/img/common/footer/ico_footer_insta.png'),
        },
      ],
    };
  },
};
</script>
