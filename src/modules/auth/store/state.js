export default {
  user: null,
  token: JSON.parse(!!localStorage.getItem('access_token')) || null,
  isTokenSet: !!localStorage.getItem('access_token')
}
