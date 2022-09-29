import Vue from 'vue'
// import App from './App.vue'
// import e1 from './views/ExampleVue.vue'
// import e2 from './views/Example2Vue.vue'
// import e3 from './views/Example3Vue.vue'
import e4 from './views/Example4Vue.vue'

import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(e4),
}).$mount('#app')
