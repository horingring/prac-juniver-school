<template>
  <div class="crclmSec__wrap">
    <section
      v-for="crclm in crclmList"
      :key="crclm.id"
      class="crclmSec"
      :class="[`crclmSec--${crclm.name}`]"
    >
      <h3 class="crclmSec__title">
        <StrongSpan class="crclmSec__titleMain"> {{ crclm.title }} </StrongSpan
        ><br />
        <StrongSpan class="crclmSec__titleSub">
          {{ crclm.titleSub }}
        </StrongSpan>
      </h3>
      <p class="crclmSec__titleText">
        {{ crclm.titleText }}
      </p>
      <ul class="crclmSec__crclmList flex-center">
        <li
          v-for="card in crclm.cards"
          :key="card.id"
          class="flex-center flex-column"
        >
          <p
            v-if="card.descYn === 'Y'"
            class="crclmSec__studyCardDesc"
            v-html="card.desc"
          ></p>
          <div class="crclmSec__studyCard">
            <img :src="card.img" :alt="card.caption" />
            <p>{{ card.caption }}</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import StrongSpan from '@/components/common/ui/StrongSpan.vue';
export default {
  components: {
    StrongSpan,
  },
  data() {
    return {
      crclmList: [
        {
          id: 0,
          name: 'discrimination',
          title: '변별',
          titleSub: '이 그림과 같은 것은 무엇일까?',
          titleText: '두 개 이상의 그림을 보고 서로 같고 다름을 구별해요',
          cards: [
            {
              id: 0,
              descYn: 'Y',
              desc: '색, 모양, 위치, 방향이<br />같은 것을 찾아요',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_01.png'),
              caption: '빵이 먹고 싶어요',
            },
            {
              id: 1,
              descYn: 'Y',
              desc: '부분을 보고<br />전체 그림을 찾아요',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_02.png'),
              caption: '꼭꼭 숨어라, 무늬 보일라',
            },
            {
              id: 2,
              descYn: 'Y',
              desc: '전체 그림의<br />부분 조각을 찾아요',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_03.png'),
              caption: '뚝딱뚝딱 공사장',
            },
          ],
        },
        {
          id: 1,
          name: 'memory',
          title: '기억',
          titleSub: '내가 본 것은 무엇일까?',
          titleText: '보았던 것을 기억하며 집중력을 길러요',
          cards: [
            {
              id: 0,
              descYn: 'Y',
              desc: '내가 본 것을 기억해요',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_04.png'),
              caption: '냠냠 피자 놀이',
            },
            {
              id: 1,
              descYn: 'Y',
              desc: '색깔의 순서를 기억해요',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_05.png'),
              caption: '알록달록 드럼을 쳐요',
            },
            {
              id: 2,
              descYn: 'Y',
              desc: '위치나 장면을 기억해요',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_06.png'),
              caption: '버스 탄 순서를 외워보자',
            },
          ],
        },
        {
          id: 2,
          name: 'grouping',
          title: '범주화',
          titleSub: '어떻게 묶을 수 있을까?',
          titleText:
            '서로 다른 생김새의 물건을 같은 기준으로 묶어 그룹화하는 능력을 길러요',
          cards: [
            {
              id: 0,
              descYn: 'N',
              desc: '',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_07.png'),
              caption: '동물 친구를 찾아라',
            },
            {
              id: 1,
              descYn: 'N',
              desc: '',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_08.png'),
              caption: '탈것을 찾아라',
            },
            {
              id: 2,
              descYn: 'N',
              desc: '',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_09.png'),
              caption: '오늘은 빨래하는 날',
            },
          ],
        },
        {
          id: 3,
          name: 'space',
          title: '공간지각',
          titleSub: '어떤 조각을 넣어야 완성될까?',
          titleText:
            '사물과 공간의 위치, 방향 관계를 파악해 공간 감각력을 길러요',
          cards: [
            {
              id: 0,
              descYn: 'Y',
              desc: '두 조각을 합치면<br />어떤 모습인지 찾아요',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_10.png'),
              caption: '종이 조각을 합치면?',
            },
            {
              id: 1,
              descYn: 'Y',
              desc: '도형을 채워<br />빠진 길을 완성해요',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_11.png'),
              caption: '고양이를 도와줘',
            },
            {
              id: 2,
              descYn: 'Y',
              desc: '회전했을 때<br />같은 그림을 찾아요',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_12.png'),
              caption: '웰컴 투 고스트 월드',
            },
          ],
        },
        {
          id: 4,
          name: 'inference',
          title: '추론',
          titleSub: '어떤 규칙이 있을까?',
          titleText:
            '그림을 보고 규칙이나 서로간의 관게를 파악해 추리력을 길러요',
          cards: [
            {
              id: 0,
              descYn: 'Y',
              desc: '패턴 규칙을 찾아요',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_13.png'),
              caption: '탐험을 떠나요',
            },
            {
              id: 1,
              descYn: 'Y',
              desc: '서로 어떤 관계인지 파악해요',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_14.png'),
              caption: '어울리는 짝을 찾아요',
            },
            {
              id: 2,
              descYn: 'Y',
              desc: '같은 관계를 가진 짝을 찾아요',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_15.png'),
              caption: '음식을 정리해요',
            },
          ],
        },
        {
          id: 5,
          name: 'categorization',
          title: '분류',
          titleSub: '어떻게 나눌 수 있을까?',
          titleText: '서로 다른 사물을 기준에 따라 가를 수 있어요',
          cards: [
            {
              id: 0,
              descYn: 'N',
              desc: '',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_16.png'),
              caption: '쏙쏙, 분리수거를 해요',
            },
            {
              id: 1,
              descYn: 'N',
              desc: '',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_17.png'),
              caption: '알록달록 장난감 정리',
            },
            {
              id: 2,
              descYn: 'N',
              desc: '',
              img: require('@/assets/img/CurriculumPage/logicPage/img_card_logic_18.png'),
              caption: '반짝 반짝 작은 별',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
