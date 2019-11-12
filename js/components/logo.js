const logo = Vue.component('logo', {

  props: {
    name: {
      type: String,
      default: 'Albin'
    }
  },

  template: /* html */`
    <div class="logo">
      <strong>{{ name }}</strong>
    </div>
  `

})

export default logo
