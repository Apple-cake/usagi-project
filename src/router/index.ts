import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/pages/Home.vue'
import Mamazon from '../components/pages/Mamazon.vue'
import Yamajitu from '../components/pages/Yamajitu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mamazon',
      name: 'mamazon',
      component: Mamazon
    },
    {
      path: '/yamajitu',
      name: 'yamajitu',
      component: Yamajitu
    },
  ]
})

export default router
