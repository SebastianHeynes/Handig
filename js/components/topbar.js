import logo from './logo.js'

const topbar = Vue.component('topbar', {

  components: {
    logo
  },

  template: /* html */`
    <header>
      <div class="level">
        <div class="level-left">
          <div class="tabs is-large">
            <ul>
              <li><router-link to="/">Work</router-link></li>
              <li><router-link to="/personal">Personal</router-link></li>
              <li><router-link to="/about">About</router-link></li>
            </ul>
          </div>
        </div>

        <div class="level-right">
          <logo name="Albin Händig" />
        </div>
      </div>
    </header>
  `

})

export default topbar
