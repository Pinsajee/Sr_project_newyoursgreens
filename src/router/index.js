
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
import loginforuser from '../views/Loginforuser.vue'
import admindrawer from '../components/backend/Drawer.vue'
import navigation from '../components/navigation.vue'




Vue.use(VueRouter)

  const routes = [
    { path: '/admin',
    name: 'admindrawer',
    component: admindrawer
  }
    ,  { path: '/booking',
    name: 'navigation',
    component: navigation
  },
  {
    path: '/bookingcourse',
    name: 'bookinguser',
    component: Home
  },
  {
    path:'/',
    name: 'loginforuser',
    component: loginforuser
  },
 
  {
    path: '/admin/Teetime',
    name: 'Teetime',
    component: Teetime
  },
  {
    path: '/admin/home',
    name: 'Homebn',
    component: HomeBE
  },
  {
    path: '/frominput',
    name: 'frominput',
    component: frominput
  },
  {
    path: '/admin/caddyinfo',
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
    path: '/adminlogin',
    name: 'Login',
    component: login
  }, {
    path: '/admin/memberinfo',
    name: 'memberinfo',
    component: memberinfo
  },{
    path: '/memberedit/:id',
    name: 'memberedit',
    component: memberedit
  },
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
