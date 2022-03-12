export default [
  {
    path: '/users',
    name: 'users.index',
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "users" */ './components/Users.vue')
  }
]
