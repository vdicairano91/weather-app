import Vue from 'vue'
import App from './App.vue'

//var $ = window.jQuery = require('jquery') 

Vue.config.productionTip = false

it('does not crash', () => {
  const Ctor = Vue.extend(App)
  const vm = new Ctor().$mount()
  expect(vm.$el.textContent).toMatch(/Welcome to Vue\.js/)
})
