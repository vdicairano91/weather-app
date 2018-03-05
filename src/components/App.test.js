import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'

it('does not crash', () => {
  const Ctor = Vue.extend(App)
  const vm = new Ctor().$mount()
  expect(vm.$el.textContent).toMatch(/Welcome to Vue\.js/)
})
