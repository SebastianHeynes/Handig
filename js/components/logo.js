const logo = Vue.component('logo', {

  props: {
    name: {
      type: String,
      default: 'Albin'
    }
  },

  template: /* html */`
    <div class="logo">
      <router-link to="/"><strong>{{ name }}</strong></router-link>
    </div>
  `

})

export default logo
