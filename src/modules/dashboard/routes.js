export default [
  {
    path: '/dashboard',
    name: 'dashboard.index',
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ './components/Dashboard.vue')
  }
]
