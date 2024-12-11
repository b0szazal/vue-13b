import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BirdDetailView from '@/views/BirdDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'birbs',
      component: HomeView,
    },
    {
      path: '/birds/:id',
      name: 'Birb',
      component: BirdDetailView,
    },
  ],
})

export default router
