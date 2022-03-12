export default [
  {
    path: '/verify/:id',
    name: 'verify.account',
    component: () =>
      import(/* webpackChunkName: "verify" */ './components/Verify.vue')
  }
]
