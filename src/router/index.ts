import { createRouter, createWebHistory } from 'vue-router'
import Hero from '@/components/Hero.vue'
import Shop from '@/components/Shop.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'

const routes = [
  { path: '/', component: Hero },
  { path: '/shop', component: Shop },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
