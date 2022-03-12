export default {
  user: null,
  token: !!localStorage.getItem('access_token') || null,
  isTokenSet: !!localStorage.getItem('access_token')
}
