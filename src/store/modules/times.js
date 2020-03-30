import Vue from 'vue'

const state = {
  times: {},
}

const getters = {
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
}

const actions = {
  addTime({ commit }, time) {
    const id = Date.now();
    time.total = total(time.start, time.end);

    commit('setTime', { id, time })
  }
}

const mutations = {
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
  }
}

const total = (start, end) => {
  const startTime = start.split(':')
  const endTime = end.split(':')
  const startTotal = parseInt(startTime[0] * 60) + parseInt(startTime[1])
  const endTotal = parseInt(endTime[0]) * 60 + parseInt(endTime[1])
  
  return  endTotal - startTotal;
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}