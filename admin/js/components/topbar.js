import logo from './logo.js'
import navigation from './navigation.js'

export default Vue.component('topbar', {

  components: {
    logo,
    navigation
  },

  template: /* html */`
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <logo />
      <navigation />
    </nav>
  `

})
