export default [
  {
    path: '/password/forgot',
    name: 'password.forgot',
    component: () =>
      import(
        /* webpackChunkName: "forgotPassword" */ './components/ForgotPassword.vue'
      )
  }
]
