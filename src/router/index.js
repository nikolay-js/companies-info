import { createRouter, createWebHistory } from 'vue-router'
import TheMain from '@/pages/TheMain.vue'
import CompanieIdPage from '@/pages/CompanieIdPage.vue'

const routes = [
  {
      path: '/',
      component: TheMain,
      alias: '/companies'
  },
  {
      path: '/companies/:id',
      component: CompanieIdPage
  },
  {
      path: '/tenders',
      component: { render: () => {} }
  },
  {
      path: '/products',
      component: { render: () => {} }
  },
  {
      path: '/cases',
      component: { render: () => {} }
  },
  {
      path: '/blog',
      component: { render: () => {} }
  },
  {
      path: '/login',
      component: { render: () => {} }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
