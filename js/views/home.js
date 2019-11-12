const home = Vue.component('home', {

  data () {
    return {
      images: null,
      currentImage: 0
    }
  },

  computed: {
    image () {
      return this.images && this.images[this.currentImage].url
    }
  },

  mounted () {
    this.read()
  },

  methods: {
    read () {
      fetch('//albinhandig.se/api/v1/images/read')
        .then(response => response.json())
        .then(json => {
          let images = json.payload.data
          this.images = images.filter(image => image.category === 'work')
        })
    },

    prev () {
      this.currentImage--
    },

    next () {
      this.currentImage++
    }
  },

  template: /* html */`
    <section class="section">
      <div v-if="images" class="container is-fluid gallery has-text-centered is-paddingles home">
        <span
          v-if="currentImage !== 0"
          class="prev-next ion-chevron-left"
          @click="prev">
        </span>

        <div class="image">
          <img
            :src="image"
          />
        </div>

        <span
          v-if="currentImage !== images.length - 1"
          class="prev-next ion-chevron-right"
          @click="next">
        </span>
      </div>
    </section>
  `

})

export default home
