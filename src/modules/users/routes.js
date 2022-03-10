export default [
  {
    path: '/users',
    name: 'users',
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "users" */ './components/Users.vue')
  }
]
