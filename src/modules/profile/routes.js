export default [
  {
    path: '/profile',
    name: 'profile.index',
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ './components/Profile.vue')
  }
]
