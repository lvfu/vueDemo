import Vue from 'vue'
// import App from './App.vue'
// import e1 from './views/ExampleVue.vue'
// import e2 from './views/Example2Vue.vue'
// import e3 from './views/Example3Vue.vue'
// import e4 from './views/Example4Vue.vue'
// import el from './views/ElementUi.vue'
import ro from './views/ExampleRouter.vue'

import router from './router/example'
import store from './store'

//elementUi
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(ro),
}).$mount('#app')
