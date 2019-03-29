import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:2
  },
  mutations:{
    INCREMENT(state){
      state.count++
    },
    DECREMENT(state){
      state.count--
    }
  },
  actions:{
    increment({commit}){
      commit('INCREMENT')
    },
    decrement({commit}){
      commit('DECREMENT')
    },
    incrementIfOdd({commit,state}){
      if(state.count%2){
        commit('INCREMENT')
      }
    },
    incrementAsync({commit}){
      setTimeout(()=>{
        commit('INCREMENT')
      },1000)
    }
  },
  getters:{
    isOdd(state){
      return state.count%2?'奇数':'偶数'
    }
  }
})
