import logo from './logo.js'

const topbar = Vue.component('topbar', {

  components: {
    logo
  },

  template: /* html */`
    <header>
      <div class="level is-hidden-mobile">
        <div class="level-left">
          <div class="tabs is-large">
            <ul>
              <li><router-link to="/work">Work</router-link></li>
              <li><router-link to="/personal">Personal</router-link></li>
              <li><router-link to="/about">About</router-link></li>
            </ul>
          </div>
        </div>

        <div class="level-right">
          <logo name="Albin Händig" />
        </div>
      </div>

      <div class="level is-mobile is-hidden-tablet">
        <div class="level-left">
          <div class="tabs">
            <ul>
              <li><router-link to="/work">Work</router-link></li>
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
