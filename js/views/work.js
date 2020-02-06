const work = Vue.component('work', {

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
    document.addEventListener('keyup', this.go)
  },

  methods: {
    read () {
      fetch('//albinhandig.se/api/v1/images/read')
        .then(response => response.json())
        .then(json => {
          let images = json.payload.data
          images = images.filter(image => image.category === 'work')
          images = images.sort((a, b) => a.position - b.position)
          this.images = images
        })
    },

    go () {
    	if (event.keyCode === 37 && this.currentImage !== 0) {
      	this.prev()
      } else if (event.keyCode === 39 && this.currentImage !== this.images.length - 1) {
      	this.next()
      }
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
      <div v-if="images" class="container is-fluid gallery has-text-centered is-paddingles home is-hidden-mobile">
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

      <div v-if="images" class="container is-fluid has-text-centered is-paddingless is-hidden-tablet">
        <div
          class="image"
          v-for="(image, i) in images"
          :key="i">
          <img :src="image.url" />
        </div>
      </div>
    </section>
  `

})

export default work
