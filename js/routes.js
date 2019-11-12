import home from './views/home.js'
import personal from './views/personal.js'
import about from './views/about.js'

const router = new VueRouter({
  routes: [{
    path: '/',
    component: home
  }, {
    path: '/personal',
    component: personal
  }, {
    path: '/about',
    component: about
  }]
})

export default router
