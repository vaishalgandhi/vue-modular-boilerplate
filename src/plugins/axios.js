import Vue from 'vue'
import axios from 'axios'
import { checkIfTokenNeedsRefresh } from '@/utils/utils.js'
import appConfig from '@/config'

axios.defaults.baseURL = appConfig.apiUrl || ''
axios.defaults.headers.common['Accept-Language'] =
  JSON.parse(localStorage.getItem('locale')) || 'en'
axios.defaults.headers.common.apikey = appConfig.apiKey || ''

axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // If request is different than any of the URLS in urlsExcludedForBearerHeader
    // then send Authorization header with token from localstorage
    const urlsExcludedForBearerHeader = [
      '/login',
      '/forgot',
      '/register',
      '/reset'
    ]
    if (urlsExcludedForBearerHeader.indexOf(config.url) === -1) {
      config.headers.Authorization = `Bearer ${JSON.parse(
        localStorage.getItem('access_token')
      )}`
    }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // Do something with response data
    // Checks if app is being used in mobile
    if (response.config.url !== `${appConfig.apiUrl}/token`) {
      checkIfTokenNeedsRefresh()
    }
    return response
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error)
  }
)

// eslint-disable-next-line no-shadow
Plugin.install = (Vue) => {
  Vue.axios = axios
  window.axios = axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return axios
      }
    },
    $axios: {
      get() {
        return axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
