import { createRouter, createWebHashHistory } from 'vue-router';

const routerHistory = createWebHashHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', component: () => import('../views/Home/index.vue') },
    { path: '/docs', component: () => import('../views/Docs/index.vue') }
  ]
});

export default router;
