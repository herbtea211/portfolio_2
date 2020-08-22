import Vue from 'vue'
import Vuex from 'vuex'
// 在這裡把所有作品 import, 組成一個array, 改變currentWork
import busness from '../components/works_compoments/ui/Busness.vue'
 
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
           }
         ],
         griphic: [

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
        let array = url.split('/')
       
        if(state.allWorks[array[0]]) {
          let currentCompomentData = state.allWorks[array[0]].find((item) => {
            return item.compomentName === array[1]
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
