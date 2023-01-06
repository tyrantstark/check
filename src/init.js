import Vue from 'vue'
import Router from 'vue-router';
import { BootstrapVue, IconsPlugin, BadgePlugin } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';


// Import Bootstrap and BootstrapVue CSS files (order is important)
// we can import even CSS files!
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(BadgePlugin)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Router)
Vue.use(Vuelidate);


/* use Vue.component( componentName, ComponentObject ) to globally register the component - once you globally register a component you don't need to locally register in each and every component */
/* add font awesome icon component */
/* Instead of font awesome icons, we can also use icons that Bootstrap Vue provides */
// https://bootstrap-vue.org/docs/icons#icons
