const footer = Vue.component('footer', {

  data () {
    return {
      settings: null
    }
  },

  computed: {
    email () {
      return this.settings && this.settings.email
    },

    mailto () {
      return this.email && `mailto: ${this.email}`
    },

    year () {
      return new Date().getFullYear()
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
    <footer class="footer">
      <div class="content has-text-centered">
        <div class="level">
          <div class="level-left">
            <strong>&copy; Copyright {{ year }} Albin Händig</strong>
          </div>

          <div class="level-right">
            <div>
              <a href="tel:+46 72 560 76 39" class="button is-text">
                <span class="icon ion-ios-telephone"></span>
              </a>
            </div>

            <div class="push-left">
              <a :href="mailto" class="button is-text">
                <span class="icon ion-email"></span>
              </a>
            </div>

            <div class="push-left">
              <a href="https://www.instagram.com/albinhandig/" target="_blank" class="button is-text">
                <span class="icon ion-social-instagram"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `

})

export default footer
