import Vue from 'vue'
import Vuex from 'vuex'
// 在這裡把所有作品 import, 組成一個array, 改變currentWork
import busness from '../components/works_compoments/ui/Busness.vue'
import movieStore from '../components/works_compoments/ui/MovieStore.vue'
import scratchCard from '../components/works_compoments/ui/Scratch_Card.vue'
import game from '../components/works_compoments/ui/Game.vue'
import kiosk from '../components/works_compoments/ui/Kiosk.vue'
import webMenu from '../components/works_compoments/ui/Web_Menu.vue'
import shangQingGo from '../components/works_compoments/ui/Shang_Qing_Go.vue'
import bookkeeping from '../components/works_compoments/ui/Bookkeeping.vue'

import center from '../components/works_compoments/gripgic/Center.vue'
import coffeePlus from '../components/works_compoments/gripgic/Coffee_Plus.vue'
import missQ from '../components/works_compoments/gripgic/Miss_Q.vue'
import monk from '../components/works_compoments/gripgic/Monk.vue'
import puE from '../components/works_compoments/gripgic/Pu_e.vue'
import WM from '../components/works_compoments/gripgic/W_M.vue'
// import lu from '../components/works_compoments/gripgic/Lu.vue'
// import zeta from '../components/works_compoments/gripgic/Zeta.vue'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
   state: {
       count: 100,
       currentWork: null,
       allWorks: {
         ui: [
           {
             compomentName: 'busness',
             compoment: busness
           },
           {
             compomentName: 'movie_store',
             compoment: movieStore
           },
           {
             compomentName: 'scratch_card',
             compoment: scratchCard
           },
           {
              compomentName: 'game',
              compoment: game
            },
            {
              compomentName: 'kiosk',
              compoment: kiosk
            },
            {
              compomentName: 'web_menu',
              compoment: webMenu
            },
            {
              compomentName: 'shang_qing_go',
              compoment: shangQingGo
            },
            {
              compomentName: 'bookkeeping',
              compoment: bookkeeping
            }
         ],
         griphic: [
          {
            compomentName: 'pu_e',
            compoment: puE
          },
          {
            compomentName: 'miss_q',
            compoment: missQ
          },
          {
            compomentName: 'coffee_plus',
            compoment: coffeePlus
          },
          {
            compomentName: 'monk',
            compoment: monk
          },
          {
            compomentName: 'center',
            compoment: center
          },
          {
            compomentName: 'w_m',
            compoment: WM
          },
          // {
          //   compomentName: 'zeta',
          //   compoment: zeta
          // },
          // {
          //   compomentName: 'lu',
          //   compoment: lu
          // },
         ]
       }
     },
     modules: {
        
    },
    mutations: {
      setCountStaus(state, payload) {
        state.count = payload
      },
      setCurrentWorkStatus(state, payload) {
        let {
          url
        } = payload
        let urlArray = url.split('/')
       
        if(state.allWorks[urlArray[0]]) {
          let currentCompomentData = state.allWorks[urlArray[0]].find((item) => {
            return item.compomentName === urlArray[1]
          })
          if(currentCompomentData) {
            state.currentWork = currentCompomentData.compoment
          }
        }

      }
    },
    actions: {
     setCurrentWork({commit}, payload) {
      commit('setCurrentWorkStatus', payload)
     }
    },
    getters: {
     getCurrentWork: state => state.currentWork
    }
})
