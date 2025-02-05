import { createRouter, createWebHistory } from 'vue-router'
import BoltView from '../views/BoltView.vue'
import CartView from '@/views/CartView.vue'
import AddProduct from '@/views/AddProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BoltView,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartView,
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: AddProduct,
    }
  ],
})

export default router
