import Vue from 'vue'
import Vuex from 'vuex'
// 在這裡把所有作品 import, 組成一個array, 改變currentWork
import griphic01 from '../components/works_compoments/01.vue'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
   state: {
       count: 100,
       currentWork: griphic01
     },
     modules: {
        
    },
    mutations: {
      setCountStaus(state, payload) {
        state.count = payload
      }
    },
    actions: {
     setCurrentWork(state, payload) {
      // state.currentWork = ...
     }
    },
    getters: {
     getCurrentWork: state => state.currentWork
    }
})
