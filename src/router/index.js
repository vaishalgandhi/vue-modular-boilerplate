import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import routes from '@/router/routes'
import appConfig from '@/config'
import verifyAuthorization from '@/middleware/verify-authorization'
import redirectIfAuthenticated from '@/middleware/redirect-if-authenticated'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  mode: 'history',
  base: appConfig.appUrl,
  linkActiveClass: 'active',
  routes: [...routes]
})

router.beforeEach(verifyAuthorization)
router.beforeEach(redirectIfAuthenticated)

export default router
