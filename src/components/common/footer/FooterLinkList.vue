<template>
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

<style></style>
