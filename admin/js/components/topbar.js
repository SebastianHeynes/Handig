const topbar = Vue.component('topbar', {

  methods: {
    showModal () {
      this.$emit('modal', true)
    },

    async signOut () {
      try {
        await auth.$signOut()
        this.$router.push('/signin')
      } catch (error) {
        console.error(error)
      }
    }
  },

  template: /* html */`
    <section class="hero">
      <div class="hero-body">
        <nav class="level">
          <div class="level-left">
            <div>
              <h4 class="title is-4">Bilder</h4>
              <h6 class="subtitle is-6">Alla dina mästerverk</h6>
            </div>
          </div>

          <div class="level-right">
            <div class="buttons has-addons is-marginless">
              <button
                title="Lägg till ny bild"
                class="button is-small is-primary is-marginless"
                @click="showModal">
                <span class="icon ion-images"></span>
                <span>Lägg till</span>
              </button>

              <button
                title="Logga ut"
                class="button is-small is-danger is-marginless"
                @click="signOut">
                <span class="icon ion-power"></span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </section>
  `

})

export default topbar
