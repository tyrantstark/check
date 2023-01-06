// import Vue from 'vue'
// import App from './App.vue'
// import { BootstrapVue } from 'bootstrap-vue'

// // Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// // Vue.use(IconsPlugin)
// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
// we simply want to run the init.js by including it
import './init';

import Vue from 'vue'
import App from './App.vue'
// it is understood we are importing index.js within router folder (default file that is searched)
import router from './router';

Vue.config.productionTip = false

new Vue({
  // router: router,
  router,
  render: h => h(App),
}).$mount('#app')
