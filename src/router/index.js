import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/pages/Home'
import experiencePage from '@/pages/Experience'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/experience',
      name: 'experience',
      component: experiencePage
    }
  ]
})
