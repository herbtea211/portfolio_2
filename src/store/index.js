import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
   state: {
       count: 100
     },
     modules: {
        
    },
    mutations: {
      setCountStaus(state, payload) {
        state.count = payload
      }
    },
    actions: {
     
    },
    getters: {
     
    }
})
