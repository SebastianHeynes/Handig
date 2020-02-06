import router from './router.js'
import * as images from './api/images/index.js'

import settings from './components/settings.js'
import topbar from './components/topbar.js'
import createModal from './components/create-modal.js'

Vue.use(VueRouter)

Vue.directive('sortable', {
  inserted (el, binding) {
    new Sortable(el, binding.value || {})
  }
})

const app = new Vue({
  el: '.app',
  router: router,

  components: {
    settings, 
    topbar,
    createModal
  },

  data () {
    return {
      isActive: false,
      images: null
    }
  },

  computed: {
    year () {
      return new Date().getFullYear()
    }
  },

  methods: {
    showModal (state) {
      this.isActive = state
    },

    async $create (data) {
      try {
        await images.$create(data)
        this.isActive = false
        this.$read()
      } catch (error) {
        console.error(error)
      }
    },

    async $read () {
      try {
        this.images = await images.$read()
      } catch (error) {
        console.error(error)
      }
    },

    async $update (image) {
      try {
        await images.$update(image)
      } catch (error) {
        console.error(error)
      }
    },

    async $delete (image, i) {
      try {
        await images.$delete(image)
        this.images.splice(i, 1)
      } catch (error) {
        console.error(error)
      }
    }
  },

  template: /* html */`
    <div>
      <div v-if="!$route.meta.needsAuth">
        <router-view />
      </div>

      <div v-else class="app splitview">
        <settings />

        <div class="images">
          <div>
            <topbar @modal="showModal" />
            <hr class="is-marginless" />

            <div class="tabs is-large is-marginless">
              <ul>
                <router-link to="/" tag="li"><a>Start</a></router-link>
                <router-link to="/work" tag="li"><a>Work</a></router-link>
                <router-link to="/personal" tag="li"><a>Personal</a></router-link>
              </ul>
            </div>

            <div class="wrapper">
              <transition name="router" mode="out-in" appear>
                <router-view />
              </transition>
            </div>
          </div>

          <footer class="footer">
            <div class="content has-text-centered">
              <p>
                &copy; <strong>copyright</strong> {{ year }}
              </p>
            </div>
          </footer>
        </div>

        <create-modal
          :isActive="isActive"
          @close="isActive = false"
          @create="$create"
        />
      </div>
    </div>
  `
})
