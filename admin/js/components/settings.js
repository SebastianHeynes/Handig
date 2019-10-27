export default Vue.component('settings', {

  template: /* html */`
    <div class="settings">
      <h4 class="title is-4">Inställningar</h4>

      <div class="field">
        <label class="label">Namn</label>
        <div class="control">
          <input class="input" type="text" />
        </div>
      </div>

      <div class="field">
        <label class="label">Profilbild</label>
        <div class="control">
          <input class="input" type="text" placeholder="https://" />
        </div>
      </div>

      <div class="field">
        <label class="label">Epost</label>
        <div class="control">
          <input class="input" type="text" />
        </div>
      </div>

      <div class="field">
        <label class="label">Presentation</label>
        <div class="control">
          <textarea class="textarea"></textarea>
        </div>
      </div>

      <button class="button is-success is-small">Spara</button>
    </div>
  `

})
