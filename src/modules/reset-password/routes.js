export default [
  {
    path: '/password/reset/:id',
    name: 'password.reset',
    component: () =>
      import(
        /* webpackChunkName: "resetPassword" */ './components/ResetPassword.vue'
      )
  }
]
