import { store } from '@/store'
import * as types from '@/store/mutation-types'

const needAuth = (auth) => auth === true

const verifyAuthorization = (to, from, next) => {
  const requiresAuth = to.meta.requiresAuth
  const isTokenSet = store.getters.isTokenSet

  /**
   * Clears all global feedback message
   * that might be visible
   */
  store.commit(types.SUCCESS, null)
  store.commit(types.ERROR, null)

  /**
   * If route doesn't require authentication be normally accessed.
   */
  if (!needAuth(requiresAuth)) {
    next()
    return // return to prevent the code from continuing in its flow
    // With this flow `else` or `else if` is not necessary
  }

  /**
   * If authentication is required and token is not set
   * Redirect to login
   */
  if (requiresAuth && !isTokenSet) {
    // eslint-disable-next-line callback-return
    next({ name: 'auth.login' })
    return
  }

  next()
}

export default verifyAuthorization
