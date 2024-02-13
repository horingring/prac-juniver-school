<template>
  <ul>
    <GnbItem v-for="item in gnbList" :key="item.id" :item="item" />
  </ul>
</template>

<script>
import GnbItem from './GnbItem.vue';

export default {
  components: {
    GnbItem,
  },
  data() {
    return {
      gnbList: [
        {
          id: 1,
          to: '/',
          text: '쥬니버스쿨 소개',
        },
        {
          id: 2,
          to: '/curriculum',
          text: '커리큘럼',
          subItems: [
            { id: 1, param: 'math', text: '수학' },
            { id: 2, param: 'coding', text: '코딩' },
            { id: 3, param: 'logic', text: '논리' },
            { id: 4, param: 'lab', text: '실험실' },
            { id: 5, param: 'social', text: '사회성' },
          ],
        },
        {
          id: 3,
          to: '/workbook',
          text: '워크북',
          subItems: [
            { id: 1, param: 'level1', text: '1단계' },
            { id: 1, param: 'level2', text: '2단계' },
          ],
        },
        {
          id: 4,
          target: '_blank',
          to: 'https://help.naver.com/service/5636/category/bookmark?lang=ko',
          text: '고객센터',
        },
      ],
    };
  },
};
</script>
