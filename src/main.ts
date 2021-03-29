import Vue from 'vue';
import App from './App.vue';
import store from './store';
import * as os from 'os';
import platform from 'platform';

Vue.config.productionTip = false;

import './../node_modules/bulma/css/bulma.css';



new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
