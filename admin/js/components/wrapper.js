export default Vue.component('wrapper', {

  template: /* html */`
    <section class="section">
      <transition
        name="router"
        mode="out-in"
        appear>
        <router-view />
      </transition>
    </section>
  `

})
