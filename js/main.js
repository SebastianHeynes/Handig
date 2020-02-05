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

  data () {
    return {
      settings: null
    }
  },

  computed: {
    color () {
      return this.settings && this.settings.color
    }
  },

  mounted () {
    this.read()
  },

  methods: {
    read () {
      fetch('//albinhandig.se/api/v1/settings/read')
        .then(response => response.json())
        .then(json => {
          this.settings = json.payload.data
        })
    }
  },

  template: /* html */`
    <div class="app" :style="{ 'background': color }">
      <page-topbar />

      <div class="wrapper">
        <router-view />
      </div><!-- wrapper -->

      <!-- <page-footer /> -->
    </div><!-- app -->
  `

})
