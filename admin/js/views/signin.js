import * as auth from './../api/auth/index.js'

export default Vue.component('signin', {

  data () {
    return {
      email: '',
      password: ''
    }
  },

  computed: {
    isValid () {
      return this.email.length && this.password.length
    }
  },

  methods: {
    signIn () {  
      if (this.isValid) {
        auth.$signIn({
          email: this.email,
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
                <label class="label">Epost</label>
                <div class="control">
                  <input
                    v-model="email"
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
