import router from './router.js'
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
