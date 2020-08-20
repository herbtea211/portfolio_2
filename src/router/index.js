import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/pages/Home'
import experiencePage from '@/pages/Experience'
import griphicListPage from '@/pages/GriphicList'
import uiListPage from '@/pages/UI_List'

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
      path: '/workTypeList/griphic',
      name: 'griphicList',
      component: griphicListPage
    },
    {
      path: '/workTypeList/ui',
      name: 'uiList',
      component: uiListPage
    },
    {
      path: '/works',
      name: 'works',
      component: worksPage
    }
  ]
})
