import { createRouter, createWebHistory } from 'vue-router';
import IntroPage from '@/pages/IntroPage.vue';
import CurriculumPage from '@/pages/CurriculumPage.vue';
import WorkBookPage from '@/pages/WorkBookPage.vue';

const routes = [
  { path: '/', component: IntroPage },
  { path: '/curriculum', component: CurriculumPage },
  { path: '/workbook', component: WorkBookPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
