import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LieDetailView from '@/views/LieDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/lies',
      name: 'Lies',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LiesView.vue'),
    },
    {
      path: '/lieDetails/:id',
      name: 'home',
      component: LieDetailView,
    },
  ],
})

export default router
