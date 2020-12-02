import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';


Vue.config.productionTip = false
Vue.use(VueSweetalert2);
Vue.use(VueToast);

new Vue({
  render: h => h(App),
}).$mount('#app')
