import { store } from '@/store'

const needAuth = (auth) => auth === true

const redirectIfAuthenticated = (to, from, next) => {
  const requiresAuth = to.meta.requiresAuth
  const isTokenSet = store.getters.isTokenSet

  /**
   * If route doesn't require authentication and token is set.
   * Redirect to dashboard
   */
  if (!needAuth(requiresAuth) && isTokenSet) {
    next('/dashboard')
    return
  }

  next()
}

export default redirectIfAuthenticated
