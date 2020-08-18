import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/pages/Home'
import experiencePage from '@/pages/Experience'
import workTypeListPage from '@/pages/WorksTypeList'
import worksPage from '@/pages/works'




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
    },
    {
      path: '/workTypeList/:from',
      name: 'workTypeList',
      component: workTypeListPage
    },
    {
      path: '/works',
      name: 'works',
      component: worksPage
    }
  ]
})
