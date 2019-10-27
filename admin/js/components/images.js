export default Vue.component('logo', {

  template: /* html */`
    <div class="images">
      <nav class="level">
        <div class="level-left">
          <h4 class="title is-4">Bilder</h4>
        </div>

        <div class="level-right">
          <button class="button is-small">Lägg till</button>
        </div>
      </nav>

      <div class="table-container">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Bild</th>
              <th>Tagg</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="is-narrow">
                <figure class="image is-24x24">
                  <img src="https://bulma.io/images/placeholders/24x24.png" />
                </figure>
              </td>
              <td>
                <span class="tag">Människor</span>
              </td>
              <td class="is-narrow has-text-right">
                <button class="delete"></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `

})
