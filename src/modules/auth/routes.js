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
    path: '/reset/:id',
    name: 'auth.resetPassword',
    component: () =>
      import(
        /* webpackChunkName: "resetPassword" */ './components/ResetPassword.vue'
      )
  }
]
