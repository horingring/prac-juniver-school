<template>
  <div class="crclmSec__wrap">
    <section
      v-for="crclm in crclmList"
      :key="crclm.id"
      class="crclmSec"
      :class="[`crclmSec--${crclm.name}`]"
    >
      <h3 class="crclmSec__title">
        <StrongSpan class="crclmSec__titleMain"> {{ crclm.title }} </StrongSpan>
      </h3>
      <p class="crclmSec__titleText" v-html="crclm.titleText"></p>
      <ul class="crclmSec__crclmList flex-center">
        <li
          v-for="card in crclm.cards"
          :key="card.id"
          class="flex-center flex-column"
        >
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
          name: 'machine',
          title: '기계와 컴퓨터',
          titleText:
            '<strong class="underline">도르래・컴퓨터・전기 회로</strong> 등을 직접 조립하고, 코딩으로 움직여요',
          cards: [
            {
              id: 0,
              img: require('@/assets/img/CurriculumPage/labPage/img_card_lab_01.png'),
              caption: '수레를 들어 올리자',
            },
            {
              id: 1,
              img: require('@/assets/img/CurriculumPage/labPage/img_card_lab_02.png'),
              caption: '컴퓨터를 고치자',
            },
            {
              id: 2,
              img: require('@/assets/img/CurriculumPage/labPage/img_card_lab_03.png'),
              caption: '조명을 고치자',
            },
          ],
        },
        {
          id: 1,
          name: 'ai',
          title: '인공지능과 데이터',
          titleText:
            '<strong class="underline">동영상 추천 알고리즘, 머신 러닝, 챗봇</strong> 등의 원리에 대해 이해하고,<br />관련 데이터를 시각화해요',
          cards: [
            {
              id: 0,
              img: require('@/assets/img/CurriculumPage/labPage/img_card_lab_04.png'),
              caption: '정답은 바로, 데이터!',
            },
            {
              id: 1,
              img: require('@/assets/img/CurriculumPage/labPage/img_card_lab_05.png'),
              caption: '팜팜이에게 가르쳐줘!',
            },
            {
              id: 2,
              img: require('@/assets/img/CurriculumPage/labPage/img_card_lab_06.png'),
              caption: '챗봇을 만들어줘',
            },
          ],
        },
        {
          id: 2,
          name: 'environment',
          title: '환경과 에너지',
          titleText:
            '바다쓰레기, 소똥 등 환경 오염의 다양한 원인들을<br /><strong class="underline">3D 프린터, 머신 러닝</strong> 등의 기술을 이용해서 해결해요',
          cards: [
            {
              id: 0,
              img: require('@/assets/img/CurriculumPage/labPage/img_card_lab_07.png'),
              caption: '산호의 집을 만들자',
            },
            {
              id: 1,
              img: require('@/assets/img/CurriculumPage/labPage/img_card_lab_08.png'),
              caption: '쓰레기를 분리해줘',
            },
            {
              id: 2,
              img: require('@/assets/img/CurriculumPage/labPage/img_card_lab_09.png'),
              caption: '황제펭귄의 알을 지켜줘',
            },
          ],
        },
        {
          id: 3,
          name: 'space',
          title: '우주와 항공',
          titleText:
            '<strong class="underline">우주의 행성들과 달</strong>에 대해 알아보고, 코딩으로 문제를 해결해요',
          cards: [
            {
              id: 0,
              img: require('@/assets/img/CurriculumPage/labPage/img_card_lab_10.png'),
              caption: '화성 탐사선을 찾아줘',
            },
            {
              id: 1,
              img: require('@/assets/img/CurriculumPage/labPage/img_card_lab_11.png'),
              caption: '우주 쓰레기를 청소하자',
            },
            {
              id: 2,
              img: require('@/assets/img/CurriculumPage/labPage/img_card_lab_12.png'),
              caption: '달에 기지를 보내줘',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
