const personal = Vue.component('personal', {

  data () {
    return {
      images: null
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
          images = images.filter(image => image.category === 'personal')
          images = images.sort((a, b) => a.position - b.position)
          this.images = images
        })
    }
  },

  template: /* html */`
    <section class="section">
      <div v-if="images" class="container is-fluid has-text-centered is-paddingless columns">
        <div class="column is-half is-offset-one-quarter">
          <div
            class="image"
            v-for="(image, i) in images"
            :key="i">
            <img :src="image.url" />
          </div>
        </div>
      </div>
    </section>
  `

})

export default personal
