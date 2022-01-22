import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    swedish: true
  },
  mutations: {
    changeLanguage(state) {
      state.swedish = !state.swedish;
    }
  },
  actions: {
  },
  modules: {
  }
})
