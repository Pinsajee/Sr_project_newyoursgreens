
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import frominput from '../views/frominput.vue'
import caddyinfo from '../views/fromcaddy.vue'
import testloop from '../views/testloop.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/frominput',
    name: 'frominput',
    component: frominput
  },
  {
    path: '/caddyinfo',
    name: 'caddyinfo',
    component: caddyinfo
  },
  {
    path: '/testloop',
    name: 'testloop',
    component: testloop
  },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
