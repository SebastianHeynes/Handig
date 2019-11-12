import topbar from './components/topbar.js'
import footer from './components/footer.js'

import router from './routes.js'

Vue.use(VueRouter)

const app = new Vue({

  el: '.app',

  components: {
    'page-topbar': topbar,
    'page-footer': footer
  },

  router: router,

  template: /* html */`
    <div class="app">
      <page-topbar />

      <div class="wrapper">
        <router-view />
      </div><!-- wrapper -->

      <page-footer />
    </div><!-- app -->
  `

})
