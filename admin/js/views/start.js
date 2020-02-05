import * as images from './../api/images/index.js'

const start = Vue.component('start', {

  data () {
    return {
      images: null
    }
  },

  mounted () {
    this.$read()

    // this.$nextTick(() => {
    //   let sortable = Sortable.create(document.querySelector('.items'), {
    //     onEnd (e) {
    //       console.log(e)
    //       // var clonedItems = this.images.filter(item => item)
    //       // clonedItems.splice(e.newIndex, 0, clonedItems.splice(e.oldIndex, 1)[0])
    //       // this.images = []

    //       // this.$nextTick(() => {
    //       //   this.images = clonedItems
    //       // })
    //     }
    //   })
    // })
  },

  methods: {
    async $read () {
      try {
        let data = await images.$read()
        data = data.filter(image => image.category === 'start')
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

export default start
