import { createRouter, createWebHashHistory } from 'vue-router';

const routerHistory = createWebHashHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', component: () => import('../views/Home/index.vue') },
    {
      path: '/docs',
      component: () => import('../views/Docs/index.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/Docs/Default/index.vue')
        },
        {
          path: 'setup',
          component: () => import('../views/Docs/Setup/index.vue')
        }
      ]
    }
  ]
});

export default router;
