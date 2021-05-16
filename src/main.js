import { createApp, h } from 'vue';
import store from './store'

import App from './App.vue'

store.subscribe((mutation, state) => {
  window.localStorage.setItem('times', JSON.stringify(state.times));
})

createApp({
  render: () => h(App),

  beforeCreate() {
		const times = JSON.parse(window.localStorage.getItem('times')) || [];

    this.$store.commit('setTimes', times)
	}
}).use(store).mount('#app')
