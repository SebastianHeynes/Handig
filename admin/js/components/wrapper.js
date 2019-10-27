export default Vue.component('wrapper', {

  template: /* html */`
    <transition
      name="router"
      mode="out-in"
      appear>
      <router-view />
    </transition>
  `

})
