export default Vue.component('add-modal', {

  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    close () {
      this.$emit('close')
    }
  },

  template: /* html */`
    <div
      :class="{ 'is-active': isActive }"
      class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Lägg till</p>
          <button class="delete" aria-label="close" @click="close"></button>
        </header>

        <section class="modal-card-body">
          <div class="field">
            <div class="control">
              <label class="label">Kategori</label>
              <input class="input" type="text" />
            </div>
            <p class="help">Varje kategori hamnar i sin egen flik</p>
          </div>

          <div class="field">
            <div class="control">
              <label class="label">URL</label>
              <input class="input" type="text" placeholder="https://" />
            </div>
            <p class="help"><a href="https://imgur.com">imgur</a></p>
          </div>
        </section>

        <footer class="modal-card-foot">
          <button class="button is-success">Lägg till</button>
          <button class="button" @click="close">Avbryt</button>
        </footer>
      </div>
    </div>
  `

})
