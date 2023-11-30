import { createApp, h } from 'vue'
import './assets/base.css'
// import VueClipboard from 'vue3-clipboard'
// import store from './store'

import App from '@/App.vue'

// store.subscribe((mutation, state) => {
//   window.localStorage.setItem('times', JSON.stringify(state.times));
// })

const app = createApp({
  render: () => h(App),

  // beforeCreate() {
  // 	const times = JSON.parse(window.localStorage.getItem('times') || '') || [];

  //   this.$store.commit('setTimes', times)
  // }
})

// app.use(store)
// app.use(VueClipboard, {
//   autoSetContainer: true,
//   appendToBody: true,
// })

app.mount('#app')
