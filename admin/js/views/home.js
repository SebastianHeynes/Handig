import settings from './../components/settings.js'
import images from './../components/images.js'

export default Vue.component('home', {

  components: {
    settings,
    images
  },

  template: /* html */`
    <div class="splitview">
      <settings />
      <images />
    </div>
  `

})
