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
      <nav class="level">
        <div class="level-left">
          <h4 class="title is-4">Bilder</h4>
        </div>

        <div class="level-right">
          <div class="buttons is-marginless">
            <button class="button is-small" @click="toggleModal">Lägg till</button>
            <button class="button is-small is-danger" @click="signOut">Logga ut</button>
          </div>
        </div>
      </nav>

      <div class="table-container">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Bild</th>
              <th>Kategori</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(image, i) in images"
              :key="image.id">
              <td class="is-narrow">
                <figure class="image is-24x24">
                  <img :src="image.url" />
                </figure>
              </td>
              <td>
                <span v-if="image.category" class="tag">{{ image.category }}</span>
              </td>
              <td class="is-narrow has-text-right">
                <button class="delete" @click="$delete(image, i)"></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <create-modal
        :isActive="isActive"
        @close="isActive = false"
        @create="$create"
      />
    </div>
  `

})
