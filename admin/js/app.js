import router from './router.js'

import topbar from './components/topbar.js'
import wrapper from './components/wrapper.js'

Vue.use(VueRouter)

const app = new Vue({
  el: '.app',
  router: router,
  template: /* html */`
    <div class="app">
      <wrapper />
    </div>
  `
})
