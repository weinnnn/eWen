import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/Home',
    meta: {keepAlive: true},
    component: () => import('../views/Home.vue')
    
  },
  {
    path: '/head',
    name: '/Head',
    meta: {keepAlive: true},
    component: () => import('../views/Head.vue'),
    
  },
  {
    path: '/login',
    name: '/Login',
    meta: {keepAlive: false},
    component: () => import('../views/Login.vue')
    
  },
  {
    path: '/main',
    name: '/Main',
    meta: {keepAlive: true},
    component: () => import('../views/main/Main.vue')
    
  },
  {
    path: '/user',
    name: '/User',
    meta: {keepAlive: true},
    component: () => import('../views/user/User.vue')
  }

 
  // {
  //   path: '/test1',
  //   name: '/test1',
  //   component: () => import('../views/test1.vue'),
  //   meta: {keepAlive: true}
  // },
  // {
  //   path: '/test2',
  //   name: '/test2',
  //   component: () => import('../views/test2.vue'),
  //   meta: {keepAlive: true}
  // },
  // {
  //   path: '/home/test',
  //   name: '/test',
  //   component: () => import('../views/test.vue'),
  //   meta: {keepAlive: true}
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
