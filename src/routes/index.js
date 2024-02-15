import { createRouter, createWebHistory } from 'vue-router';
import IntroPage from '@/pages/IntroPage.vue';
import CurriculumPage from '@/pages/CurriculumPage.vue';
import WorkBookPage from '@/pages/WorkBookPage.vue';

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: IntroPage,
  },
  {
    path: '/curriculum',
    name: 'Curriculum',
    component: CurriculumPage,
    beforeEnter: (to, from, next) => {
      if (!Object.prototype.hasOwnProperty.call(to.query, 't')) {
        next({
          path: '/curriculum',
          query: { t: 'math' },
        });
      } else {
        next();
      }
    },
  },
  {
    path: '/workbook',
    name: 'Workbook',
    component: WorkBookPage,
    beforeEnter: (to, from, next) => {
      if (!Object.prototype.hasOwnProperty.call(to.query, 't')) {
        next({
          path: '/workbook',
          query: { t: 'level1' },
        });
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
