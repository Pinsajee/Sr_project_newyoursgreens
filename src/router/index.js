
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import frominput from  '../views/fromcaddy.vue'
import caddyinfo from '../views/backend/Caddyinfo.vue'
import testloop from '../views/testloop.vue'
import formedit from '../views/formedit.vue'
import login from '../views/login.vue'
import memberinfo from '../views/backend/MemberInfo.vue'
import memberedit from '../views/backend/MemberEdit.vue'
import HomeBE from '../views/backend/HomeBE.vue'
import Teetime from '../views/backend/TeetimeBE.vue'
import caddylist from '../views/backend/CaddyList.vue'
import courseinfo from '../views/courseInfo.vue'



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/overview',
    name: 'courseinfo',
    component: courseinfo
  },

  {
    path: '/Teetime',
    name: 'Teetime',
    component: Teetime
  },
  {
    path: '/Home',
    name: 'Home',
    component: HomeBE
  },
  {
    path: '/frominput',
    name: 'frominput',
    component: frominput
  },
  {
    path: '/caddy',
    name: 'caddyinfo',
    component: caddyinfo
  },
  {
    path: '/testloop',
    name: 'testloop',
    component: testloop
  },
  {
    path: '/formedit/:id',
    name: 'formedit',
    component: formedit
  }, {
    path: '/login',
    name: 'Login',
    component: login
  }, {
    path: '/memberinfo',
    name: 'memberinfo',
    component: memberinfo
  },{
    path: '/memberedit/:id',
    name: 'memberedit',
    component: memberedit
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
