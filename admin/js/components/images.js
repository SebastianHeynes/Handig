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
    <div class="images">
      <section class="hero">
        <div class="hero-body">
          <nav class="level">
            <div class="level-left">
              <div>
                <h4 class="title is-4">Bilder</h4>
                <h6 class="subtitle is-6">Alla dina mästerverk</h6>
              </div>
            </div>

            <div class="level-right">
              <div class="buttons has-addons is-marginless">
                <button
                  title="Lägg till ny bild"
                  class="button is-small is-primary is-marginless"
                  @click="toggleModal">
                  <span class="icon ion-images"></span>
                  <span>Lägg till</span>
                </button>

                <button
                  title="Logga ut"
                  class="button is-small is-danger is-marginless"
                  @click="signOut">
                  <span class="icon ion-power"></span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <hr class="is-marginless" />

      <div class="gallery">
        <div
          v-for="(image, i) in images"
          :key="image.id"
          class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="image.url" />
            </figure>
          </div>

          <div v-if="image.category" class="card-content">
            <span v-if="image.category" class="tag">{{ image.category }}</span>
          </div>

          <footer class="card-footer">
            <p class="card-footer-item">
              <a class="button is-small" :href="image.url">
                <span class="icon ion-arrow-expand"></span>
                <span>Fullstorlek</span>
              </a>
            </p>
            <p class="card-footer-item">
              <button class="button is-danger is-small" @click="$delete(image, i)">
                <span class="icon ion-trash-b"></span>
                <span>Radera</span>
              </button>
            </p>
          </footer>
        </div>
      </div>

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
