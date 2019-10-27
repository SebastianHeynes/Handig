export default Vue.component('settings', {

  template: /* html */`
    <div class="settings">
      <h4 class="title is-4">Inställningar</h4>

      <div class="field">
        <label class="label">Namn</label>
        <div class="control">
          <input class="input" type="text" placeholder="Albin Händig" />
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
          <input class="input" type="text" placeholder="business@albinhandig.se" />
        </div>
      </div>

      <div class="field">
        <label class="label">Presentation</label>
        <div class="control">
          <textarea class="textarea"></textarea>
        </div>
      </div>

      <div class="field">
        <label class="label">Facebook</label>
        <div class="control">
          <input class="input" type="text" placeholder="https://" />
        </div>
      </div>

      <div class="field">
        <label class="label">Instagram</label>
        <div class="control">
          <input class="input" type="text" placeholder="https://" />
        </div>
      </div>

      <button class="button is-success is-small">Spara</button>
    </div>
  `

})
