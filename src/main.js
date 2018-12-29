import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import HyperLink from './components/hyper-link.vue'

Vue.component('hyper-link', HyperLink)
Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
