import Vue from 'vue'
import App from './components/App.vue'
import VueGeolocation from 'vue-browser-geolocation';
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.use(VueGeolocation);

Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'

Vue.config.productionTip = false
new Vue({
  el: '#app',
  render: h => h(App),
})

