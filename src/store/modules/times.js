const state  = {
  times: [],
}

const getters = {
  times(state, getters, rootState) {
    return state.times
  }
}

const actions = {
  addTime({ state, commit }, time) {
    const key = Date.now();
    time.total = this.total(time.start, time.end);

    commit('pushTime', {
      key,
      time,
    })
  }
}

const mutations = {
  pushTime(state, time) {
    state.times.push(time)
  },

  updateTime(state, time) {
    const index = state.times.findIndex(row => row.key === time.key)

    if(index) {
      state.times[index] = time
    }
  },

  deleteTime(state, key) {
    const index = state.times.findIndex(row => row.key === key)

    if(index) {
      state.times = [...state.times].splice(index, 1)
    }
  },

  setTimes(state, times) {
    state.times = times
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}