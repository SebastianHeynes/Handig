import * as auth from './../api/auth/index.js'
import * as images from './../api/images/index.js'
import createModal from './create-modal.js'

export default Vue.component('images', {

  components: {
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
    toggleModal () {
      this.isActive = !this.isActive
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
    },

    signOut () {
      auth.$signOut().then(data => {
        this.$router.push('/signin')
      })
    }
  },
  
  mounted () {
    this.$read()
  },

  template: /* html */`
    
      <div class="tabs is-large">
        <ul>
          <li class="is-active"><router-link to="/start">Start</router-link></li>
          <li><router-link to="/work">Work</router-link></li>
          <li><router-link to="/personal">Personal</router-link></li>
        </ul>
      </div>

      <router-view />

      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            &copy; <strong>copyright</strong> {{ year }}
          </p>
        </div>
      </footer>

      <create-modal
        :isActive="isActive"
        @close="isActive = false"
        @create="$create"
      />
    </div>
  `

})
