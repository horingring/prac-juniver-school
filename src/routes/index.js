import { createRouter, createWebHistory } from 'vue-router';
import IntroPage from '@/pages/IntroPage.vue';
import CurriculumPage from '@/pages/curriculum/CurriculumPage.vue';
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
  },
  {
    path: '/workbook',
    name: 'Workbook',
    component: WorkBookPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // default 쿼리로 t=... 를 준다
  if (to.name === 'Curriculum' && !to.query.t) {
    return next({
      path: '/curriculum',
      query: { t: 'math' },
    });
  } else if (to.name === 'Workbook' && !to.query.t) {
    return next({
      path: '/workbook',
      query: { t: 'level1' },
    });
  }
  next();
});

export default router;
