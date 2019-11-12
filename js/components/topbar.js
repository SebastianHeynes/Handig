import logo from './logo.js'

const topbar = Vue.component('topbar', {

  components: {
    logo
  },

  template: /* html */`
    <header>
      <div class="tabs is-right is-large">
        <logo name="Albin Händig" />

        <ul>
          <li><router-link to="/">Work</router-link></li>
          <li><router-link to="/personal">Personal</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </header>
  `

})

export default topbar
