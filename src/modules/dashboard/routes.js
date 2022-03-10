export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ './components/Dashboard.vue')
  }
]
