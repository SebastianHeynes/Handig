const about = Vue.component('about', {

  data () {
    return {
      settings: null
    }
  },

  computed: {
    image () {
      return this.settings && this.settings.profilepic
    },

    email () {
      return this.settings && this.settings.email
    },

    presentation () {
      return this.settings && this.settings.presentation
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
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <div class="box">
              <h1 class="title is-4">{{ presentation }}</h1>
              <h1 class="title is-4">{{ email }}</h1>
              <h1 class="title is-4">+46 (0) 72 560 76 39</h1>
            </div>

            <div class="columns">
              <div class="column is-half is-offset-half is-full-mobile">
                <figure class="profilepicture image is-256x256">
                  <img
                    :src="image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `

})

export default about
