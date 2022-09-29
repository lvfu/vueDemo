import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFoundView from '@/views/router/RouterFour.vue'
import LoginView from '@/views/router/RouterLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView,
  },
  {
    path: '/404',
    name: '404',
    component: NotFoundView,
  },
]

const router = new VueRouter({
  routes,
})

export default router
