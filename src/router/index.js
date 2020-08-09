import { createRouter, createWebHashHistory } from 'vue-router';

const routerHistory = createWebHashHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', component: () => import('../views/Home/index.vue') },
    { path: '/contact', component: () => import('../views/Contact/index.vue') }
  ]
});

export default router;
