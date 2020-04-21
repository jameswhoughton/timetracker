import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    times: {},
  },

  getters: {
    ids(state) {
      return Object.keys(state.times)
    },
  
    totals(state) {
      const totals = {}
  
      Object.values(state.times).forEach(time => {
        if(typeof totals[time.description] === 'undefined') {
          totals[time.description] = 0
        }
  
        totals[time.description] += time.total
      })
  
      return totals
    },
  
    roundedTotals(state, getters) {
      const totals = {...getters['totals']}
  
      for(const description in totals) {
        totals[description] = {
          total: totals[description],
          rounded: roundTime(totals[description]),
        }
      }
  
      return totals
    }
  },

  actions: {
    addTime({ commit }, time) {
      const id = Date.now();
      time.total = total(time.start, time.end);
  
      commit('setTime', { id, time })
    }
  },

  mutations: {
    setTime(state, data) {
      Vue.set(state.times, data.id, data.time)
    },
  
    deleteTime(state, id) {
      Vue.delete(state.times, id)
    },
  
    setValue(state, { id, type, value }) {
      Vue.set(state.times[id], type, value)
      if(type === 'start' || type === 'end') {
        Vue.set(state.times[id], 'total', total(state.times[id].start, state.times[id].end))
      }
    },
  
    setTimes(state, times) {
      state.times = times
    },
  }
})

const total = (start, end) => {
  const startTime = start.split(':')
  const endTime = end.split(':')
  const startTotal = parseInt(startTime[0] * 60) + parseInt(startTime[1])
  const endTotal = parseInt(endTime[0]) * 60 + parseInt(endTime[1])
  
  return  endTotal - startTotal;
}

const roundTime = (time) => {
  return 15 * Math.round(time / 15);
}