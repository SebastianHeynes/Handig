import * as images from './../api/images/index.js'

export default Vue.component('create-modal', {

  data () {
    return {
      category: '',
      description: '',
      url: ''
    }
  },

  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    close () {
      this.$emit('close')
    },

    cancel () {
      this.category = ''
      this.description = ''
      this.url = ''
      this.close()
    },

    create () {
      const data = {
        category: this.category,
        description: this.description,
        url: this.url
      }

      this.$emit('create', data)
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
              <label class="label" for="category">Kategori</label>
              <div class="select">
                <select id="category" v-model="category">
                  <option value="">Kategori</option>
                  <option value="start">Start</option>
                  <option value="work">Work</option>
                  <option value="personal">Personal</option>
                </select>
              </div>
            </div>
            <p class="help">Varje kategori hamnar i sin egen flik</p>
          </div>

          <div class="field">
            <div class="control">
              <label class="label" for="description">Bildtext</label>
              <input
                id="description"
                v-model="description"
                class="input"
                type="text"
              />
            </div>
            <p class="help">Beskrivning som syns under bilden</p>
          </div>

          <div class="field">
            <div class="control">
              <label class="label" for="url">URL</label>
              <input
                id="url"
                v-model="url"
                class="input"
                type="text"
                placeholder="//i.imgur.com"
              />
            </div>
            <p class="help"><a href="https://imgur.com">imgur</a></p>
          </div>
        </section>

        <footer class="modal-card-foot">
          <button class="button is-success" @click="create">Lägg till</button>
          <button class="button" @click="cancel">Avbryt</button>
        </footer>
      </div>
    </div>
  `

})
