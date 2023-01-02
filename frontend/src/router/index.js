import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/MovieIndexPage'
import Show from '@/components/MovieDetailPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/:id',
    name: 'show',
    component: Show
  }
]

const router = new VueRouter({
  routes
})

export default router
