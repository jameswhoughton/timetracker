import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import store from './store'
import Vuex from 'vuex'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

store.subscribe((mutation, state) => {
  window.localStorage.setItem('times', JSON.stringify(state.times));
})

new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
		const times = JSON.parse(window.localStorage.getItem('times')) || {};

    this.$store.commit('setTimes', times)
	},
}).$mount('#app')
