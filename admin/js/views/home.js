import topbar from './../components/topbar.js'
import settings from './../components/settings.js'
import images from './../components/images.js'

export default Vue.component('home', {

  components: {
    settings,
    images
  },

  template: /* html */`
    <div>
      <topbar />

      <div class="splitview">
        <settings />
        <images />
      </div>
    </div>
  `

})
