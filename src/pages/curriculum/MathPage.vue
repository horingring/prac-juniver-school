<template>
  <div class="mathPage curriculumPage">
    <IntroSection useBadge>
      <template #heading>
        <StrongSpan color="#00cb50">348개</StrongSpan>의<br />
        <StrongSpan underline underlineColor="#ddfed0"
          >연령별 맞춤 수학 콘텐츠</StrongSpan
        >
      </template>
      <template #badge>
        <p class="introSec__titleBadgeText">
          중앙대학교 유아교육학과<br />
          조형숙 교수 연구팀
        </p>
      </template>
    </IntroSection>
    <div class="crclmSec__wrap">
      <section
        v-for="mathCurriculum in mathCurriculums"
        :key="mathCurriculum.id"
        class="crclmSec"
        :class="[`crclmSec--level${mathCurriculum.level}`]"
      >
        <h3 class="crclmSec__title">
          <span>{{ mathCurriculum.level }}단계</span>
          <span class="bar"> | </span>
          <span>{{ mathCurriculum.title }}</span>
        </h3>
        <ol class="crclmSec__accordionList">
          <li v-for="stepInfo in mathCurriculum.steps" :key="stepInfo.id">
            <AccordionComponent :show="stepInfo.id === 0" btnTextBlind>
              <template #header>
                <strong>Step {{ stepInfo.step }}</strong>
                <p v-html="stepInfo.title"></p>
              </template>
              <template #body>
                <ul class="crclmSec__detailList">
                  <li v-for="detail in stepInfo.details" :key="detail.id">
                    <h4>{{ detail.title }}</h4>
                    <p v-html="detail.content"></p>
                  </li>
                </ul>
                <ul class="crclmSec__imgList">
                  <li v-for="imgInfo in stepInfo.imgs" :key="imgInfo.id">
                    <div class="crclmSec__imgWrap">
                      <img :src="imgInfo.img" :alt="imgInfo.title" />
                    </div>
                    <p>{{ imgInfo.title }}</p>
                  </li>
                </ul>
              </template>
            </AccordionComponent>
          </li>
        </ol>
        <div class="crclmSec__downArrow"></div>
      </section>
    </div>
  </div>
</template>

<script>
import IntroSection from '@/components/CurriculumPage/common/IntroSection.vue';
import StrongSpan from '@/components/common/ui/StrongSpan.vue';
import AccordionComponent from '@/components/common/ui/AccordionComponent.vue';
export default {
  data() {
    return {
      mathCurriculums: [
        {
          id: 0,
          level: 1,
          title: '추천연령 만 3-4세',
          steps: [
            {
              id: 0,
              step: 1,
              title: '1부터 5까지 숫자와 친해져요',
              details: [
                {
                  id: 0,
                  title: '수',
                  content:
                    '1부터 5까지의 수를 셀 수 있어요<br>수의 양을 알고, 순서대로 배열할 수 있어요',
                },
                {
                  id: 1,
                  title: '연산',
                  content: '두 개의 수를 모아 2~4를 만드는 방법을 알아요',
                },
                {
                  id: 2,
                  title: '측정',
                  content:
                    '봄, 여름, 가을, 겨울의 모습을 설명할 수 있어요<br>무엇의 길이가 더 길고 짧은지 비교할 수 있어요',
                },
              ],
              imgs: [
                {
                  id: 0,
                  title: '칙칙폭폭 사탕나라 친구들',
                  img: require('@/assets/img/CurriculumPage/mathPage/img_card_math_01.png'),
                },
                {
                  id: 1,
                  title: '장난감을 정리해요',
                  img: require('@/assets/img/CurriculumPage/mathPage/img_card_math_02.png'),
                },
                {
                  id: 2,
                  title: '파릇파릇 봄풍경 꾸미기',
                  img: require('@/assets/img/CurriculumPage/mathPage/img_card_math_03.png'),
                },
              ],
            },
            {
              id: 1,
              step: 2,
              title: '10까지의 수를 익히고<br>수 모으기・가르기를 배워요',
              details: [
                {
                  id: 0,
                  title: '수',
                  content:
                    '0부터 10까지의 수를 쓰고 의미를 이해할 수 있어요<br>10묶음과 낱개의 의미를 이해할 수 있어요',
                },
                {
                  id: 1,
                  title: '연산',
                  content:
                    '두개의 수를 모아 5를 만드는 방법을 알아요<br>2, 3, 4를 두 개의 수로 가르는 방법을 알아요',
                },
                {
                  id: 2,
                  title: '측정',
                  content:
                    '무엇의 높이가 더 높고 낮은지,<br>무엇의 무게가 더 무겁고 가벼운지,<br>무엇의 개수가 더 많고 적은지<br>비교할 수 있어요',
                },
              ],
              imgs: [
                {
                  id: 0,
                  title: '칙칙폭폭 사탕나라 친구들',
                  img: require('@/assets/img/CurriculumPage/mathPage/img_card_math_01.png'),
                },
                {
                  id: 1,
                  title: '장난감을 정리해요',
                  img: require('@/assets/img/CurriculumPage/mathPage/img_card_math_02.png'),
                },
                {
                  id: 2,
                  title: '파릇파릇 봄풍경 꾸미기',
                  img: require('@/assets/img/CurriculumPage/mathPage/img_card_math_03.png'),
                },
              ],
            },
          ],
        },
        {
          id: 1,
          level: 2,
          title: '추천연령 만 5세 이상',
          steps: [
            {
              id: 0,
              step: 1,
              title: '1부터 5까지 숫자와 친해져요',
              details: [
                {
                  id: 0,
                  title: '수',
                  content:
                    '1부터 5까지의 수를 셀 수 있어요<br>수의 양을 알고, 순서대로 배열할 수 있어요',
                },
                {
                  id: 1,
                  title: '연산',
                  content: '두 개의 수를 모아 2~4를 만드는 방법을 알아요',
                },
                {
                  id: 2,
                  title: '측정',
                  content:
                    '봄, 여름, 가을, 겨울의 모습을 설명할 수 있어요<br>무엇의 길이가 더 길고 짧은지 비교할 수 있어요',
                },
              ],
              imgs: [
                {
                  id: 0,
                  title: '칙칙폭폭 사탕나라 친구들',
                  img: require('@/assets/img/CurriculumPage/mathPage/img_card_math_01.png'),
                },
                {
                  id: 1,
                  title: '장난감을 정리해요',
                  img: require('@/assets/img/CurriculumPage/mathPage/img_card_math_02.png'),
                },
                {
                  id: 2,
                  title: '파릇파릇 봄풍경 꾸미기',
                  img: require('@/assets/img/CurriculumPage/mathPage/img_card_math_03.png'),
                },
              ],
            },
            {
              id: 1,
              step: 2,
              title: '10까지의 수를 익히고<br>수 모으기・가르기를 배워요',
              details: [
                {
                  id: 0,
                  title: '수',
                  content:
                    '0부터 10까지의 수를 쓰고 의미를 이해할 수 있어요<br>10묶음과 낱개의 의미를 이해할 수 있어요',
                },
                {
                  id: 1,
                  title: '연산',
                  content:
                    '두개의 수를 모아 5를 만드는 방법을 알아요<br>2, 3, 4를 두 개의 수로 가르는 방법을 알아요',
                },
                {
                  id: 2,
                  title: '측정',
                  content:
                    '무엇의 높이가 더 높고 낮은지,<br>무엇의 무게가 더 무겁고 가벼운지,<br>무엇의 개수가 더 많고 적은지<br>비교할 수 있어요',
                },
              ],
              imgs: [
                {
                  id: 0,
                  title: '칙칙폭폭 사탕나라 친구들',
                  img: require('@/assets/img/CurriculumPage/mathPage/img_card_math_01.png'),
                },
                {
                  id: 1,
                  title: '장난감을 정리해요',
                  img: require('@/assets/img/CurriculumPage/mathPage/img_card_math_02.png'),
                },
                {
                  id: 2,
                  title: '파릇파릇 봄풍경 꾸미기',
                  img: require('@/assets/img/CurriculumPage/mathPage/img_card_math_03.png'),
                },
              ],
            },
          ],
        },
      ],
    };
  },
  components: {
    IntroSection,
    StrongSpan,
    AccordionComponent,
  },
};
</script>

<style></style>
