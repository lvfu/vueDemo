import Vue from 'vue'
import VueRouter from 'vue-router'
// import NotFoundView from '@/views/router/RouterFour.vue'
// import LoginView from '@/views/router/RouterLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/router/RouterLogin.vue'),
    redirect: 'l/p1',
    children: [
      {
        path: 'l/p1',
        component: () => import('@/views/router/login/RouterLogin1.vue'),
      },
      {
        path: 'l/p2',
        component: () => import('@/views/router/login/RouterLogin2.vue'),
      },
      {
        path: 'l/p3',
        component: () => import('@/views/router/login/RouterLogin3.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/router/RouterFour.vue'),
  },
  {
    path: '*',
    redirect: '/404',
  },
]

const router = new VueRouter({
  routes,
})

export default router
