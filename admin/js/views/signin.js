import * as api from './../api/index.js'

export default Vue.component('signin', {

  data () {
    return {
      username: '',
      password: ''
    }
  },

  computed: {
    isValid () {
      return this.username.length && this.password.length
    }
  },

  methods: {
    signIn () {  
      if (this.isValid) {
        api.signIn({
          username: this.username,
          password: this.password
        }).then(data => {
          this.$router.push('/')
        })
      }
    }
  },

  template: /* html */`
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third is-offset-one-third">
            <h2 class="title">Logga in</h2>
            
            <form
              class="auth-form sign-in"
              @submit.prevent="signIn">
              <div class="field">
                <label class="label">Användarnamn</label>
                <div class="control">
                  <input
                    v-model="username"
                    class="input"
                    type="text"
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Lösenord</label>
                <div class="control">
                  <input
                    v-model="password"
                    class="input"
                    type="text"
                  />
                </div>
              </div>

              <input
                :disabled="!isValid"
                type="submit"
                value="Logga in"
                class="button is-success"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  `

})
