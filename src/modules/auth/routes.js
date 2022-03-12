export default [
  {
    path: '/login',
    name: 'auth.login',
    component: () =>
      import(/* webpackChunkName: "login" */ './components/Login.vue')
  },
  {
    path: '/signup',
    name: 'auth.signup',
    component: () =>
      import(/* webpackChunkName: "signup" */ './components/SignUp.vue')
  },
  {
    path: '/verify/:id',
    name: 'auth.verify',
    component: () =>
      import(/* webpackChunkName: "verify" */ './components/Verify.vue')
  },
  {
    path: '/forgot',
    name: 'auth.forgotPassword',
    component: () =>
      import(
        /* webpackChunkName: "forgotPassword" */ './components/ForgotPassword.vue'
      )
  },
  {
    path: '/reset/:id',
    name: 'auth.resetPassword',
    component: () =>
      import(
        /* webpackChunkName: "resetPassword" */ './components/ResetPassword.vue'
      )
  }
]
