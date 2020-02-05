import start from './views/start.js'
import work from './views/work.js'
import personal from './views/personal.js'
import signin from './views/signin.js'

// Initialize router
const router = new VueRouter({
  linkActiveClass: 'is-active',
  routes: [{
    path: '/',
    component: start,
    meta: { needsAuth: true }
  }, {
    path: '/work',
    component: work,
    meta: { needsAuth: true }
  }, {
    path: '/personal',
    component: personal,
    meta: { needsAuth: true }
  }, {
    path: '/signin',
    component: signin,
    meta: { needsAuth: false }
  }]
})

// Router guards
router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.needsAuth)) {
    if (!sessionStorage.getItem('token')) next('/signin')
  }

  next()
})

export default router
