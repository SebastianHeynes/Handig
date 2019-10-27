import * as settings from './../api/settings/index.js'

export default Vue.component('settings', {

  data () {
    return {
      settings: null,
      isLoading: false
    }
  },

  methods: {
    async $read () {
      this.isLoading = true

      try {
        this.settings = await settings.$read()
      } catch (error) {
        console.error(error)
      }

      this.isLoading = false
    },

    async $update () {
      this.isLoading = true

      try {
        settings.$update(this.settings)
      } catch (error) {
        console.error(error)
      }

      this.isLoading = false
    }
  },

  mounted () {
    this.$read()
  },

  template: /* html */`
    <div v-if="settings" class="settings">
      <h4 class="title is-4">Inställningar</h4>

      <div class="field">
        <label class="label">Epost</label>
        <div class="control">
          <input
            v-model="settings.email"
            class="input"
            type="text"
            placeholder="business@albinhandig.se"
            disabled
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Profilbild</label>
        <div class="control">
          <input
            v-model="settings.profilepic"
            class="input"
            type="text"
            placeholder="https://"
            :disabled="isLoading"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Presentation</label>
        <div class="control">
          <textarea
            v-model="settings.presentation"
            class="textarea"
            :disabled="isLoading">
          </textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">Facebook</label>
        <div class="control">
          <input
            v-model="settings.facebook"
            class="input"
            type="text"
            placeholder="https://"
            :disabled="isLoading"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Instagram</label>
        <div class="control">
          <input
            v-model="settings.instagram"
            class="input"
            type="text"
            placeholder="https://"
            :disabled="isLoading"
          />
        </div>
      </div>

      <button
        class="button is-success is-small"
        @click="$update"
        :disabled="isLoading">
        Spara
      </button>
    </div>
  `

})
