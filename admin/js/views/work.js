import * as images from './../api/images/index.js'

const work = Vue.component('work', {

  data () {
    return {
      images: null
    }
  },

  mounted () {
    this.$read()
  },

  methods: {
    async $read () {
      try {
        let data = await images.$read()
        data = data.filter(image => image.category === 'work')
        data = data.sort((a, b) => a.position - b.position)
        this.images = data
      } catch (error) {
        console.error(error)
      }
    },

    async $update (image) {
      try {
        await images.$update(image)
      } catch (error) {
        console.error(error)
      }
    },

    async $delete (image, i) {
      try {
        await images.$delete(image)
        this.images.splice(i, 1)
      } catch (error) {
        console.error(error)
      }
    },

    onUpdate (event) {
      this.images.splice(event.newIndex, 0, this.images.splice(event.oldIndex, 1)[0])

      let image = this.images[event.newIndex]
      image.position = event.newIndex

      this.$update(image)
    }
  },

  template: /* html */`
    <ul class="list" v-sortable="{ onUpdate: onUpdate }">
      <li v-for="(image, i) in images" :key="image.id" class="list-item">
        <div class="level">
          <figure class="image is-32x32 level-left">
            <img :src="image.url" />
          </figure>

          <div class="level-right">
            <p>
              <a class="button is-small" :href="image.url">
                <span class="icon ion-arrow-expand"></span>
                <span>Fullstorlek</span>
              </a>
            </p>

            <p>
              <button class="button is-danger is-small" @click="$delete(image, i)">
                <span class="icon ion-trash-b"></span>
                <span>Radera</span>
              </button>
            </p>
          </div>
      </li>
    </ul>
  `

})

export default work
