import axios from 'axios'

export default {
  userLogin(payload) {
    return axios.post('/login', payload)
  },
  refreshToken() {
    return axios.get('/token')
  },
  userSignUp(payload) {
    return axios.post('/register', payload)
  }
}
