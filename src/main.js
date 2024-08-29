//import { createApp } from 'vue'
//import App from './App.vue'

//createApp(App).mount('#app')

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Optional: if using Vuex

Vue.config.productionTip = false;

new Vue({
  router,
  store, // Optional: if using Vuex
  render: h => h(App)
}).$mount('#app');