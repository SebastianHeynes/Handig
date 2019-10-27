import * as api from './api/index.js'

const app = new Vue({

  el: '.app',

  data () {
    return {
      images: null
    }
  },

  mounted () {
    this.readImages()
  },

  methods: {
    async readImages () {
      try {
        const { payload } = await api.images()
        this.images = payload.data
      } catch (error) {
        console.error(error)
      }
    }
  },

  template: /* html */`
    <div class="app">
      <section class="section">
        <h1
          :class="{ 'has-text-danger': !images }"
          class="title is-2 has-text-centered">
          Albin Händig
        </h1>

        <div
          v-if="images"
          class="columns">
          <div class="column is-half is-offset-one-quarter">
            <img
              v-for="(image, i) in images"
              :key="i"
              :src="image.picture"
            />
          </div>
        </div>
      </section>
    </div>
  `

})
