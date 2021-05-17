import Vuex from 'vuex'

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

    updateTime({ state, commit }, { index, time }) {
      const times = state.times
      
      if(times[index]) {
        Vue.set(times, index, time)
      }

      time.total = total(time.start, time.end)

      commit('setTimes', times)
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
  // Always round up for the first 15 mins.
  if(time < 15) { return 15 }

  return 15 * Math.round(time / 15);
}