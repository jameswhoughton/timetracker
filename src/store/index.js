import Vuex from 'vuex'
import { total, roundTime } from '@/helpers/time'

export default Vuex.createStore({
  state: {
    times: [],
  },

  getters: {
    totals(state) {
      const totals = {}
  
      state.times.forEach(time => {
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
    addTime({ state, commit }, time) {
      const times = state.times
      
      time.total = total(time.start, time.end)
      
      times.push(time)

      commit('setTimes', times)
    },

    updateDescription({ state, commit }, { index, description }) {
      if(state.times[index] === undefined) { return }
      
      commit('setDescription', { index, description })
    },

    updateStart({ state, commit }, { index, start }) {
      if(state.times[index] === undefined) { return }

      commit('setStart', { index, start })

      const time = state.times[index]
      const totalTime = total(time.start, time.end)

      commit('setTotal', { index, total: totalTime })
    },

    updateEnd({ state, commit }, { index, end }) {
      if(state.times[index] === undefined) { return }
      
      commit('setEnd', { index, end })

      const time = state.times[index]
      const totalTime = total(time.start, time.end)

      commit('setTotal', { index, total: totalTime })
    },
    
    deleteTime({ state, commit }, index) {
      const times = state.times
      
      if(times[index]) {
        times.splice(index, 1)
      }

      commit('setTimes', times)
    }
  },

  mutations: {
    setTimes(state, times) {
      state.times = times
    },

    setDescription(state, { index, description }) {
      state.times[index].description = description
    },

    setStart(state, { index, start }) {
      state.times[index].start = start
    },

    setEnd(state, { index, end }) {
      state.times[index].end = end
    },

    setTotal(state, { index, total }) {
      state.times[index].total = total
    },
  }
})