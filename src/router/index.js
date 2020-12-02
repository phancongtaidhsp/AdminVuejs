import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { name: 'Dashboard', path: '/', component: Home},
  { name: 'Permission', path: '/permission', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        name: 'Page Permission',
        path: 'page',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        name: 'Directive Permission',
        path: 'directive',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        name: 'Role Permission',
        path: 'role',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
