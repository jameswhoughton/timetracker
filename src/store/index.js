import Vue from 'vue'
import Vuex from 'vuex'

import times from './modules/times'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    times,
  }
})