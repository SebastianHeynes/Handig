import home from './views/home.js'
import signin from './views/signin.js'

// Initialize router
const router = new VueRouter({
  routes: [{
    path: '/',
    component: home,
    meta: {
      needsAuth: true
    }
  }, {
    path: '/signin',
    component: signin,
    meta: {
      needsAuth: false
    }
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
