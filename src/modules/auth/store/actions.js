import * as types from '@/store/mutation-types'
import { routes as router } from '@/modules'
import api from '../services'
import { buildSuccess, handleError } from '@/utils/utils.js'
import { addMinutes, format } from 'date-fns'

const MINUTES_TO_CHECK_FOR_TOKEN_REFRESH = 1440

export default {
  userLogin({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(types.SHOW_LOADING, true)
      api
        .userLogin(payload)
        .then((response) => {
          if (response.status === 200) {
            window.localStorage.setItem(
              'user',
              JSON.stringify(response.data.user)
            )
            window.localStorage.setItem(
              'access_token',
              response.data.access_token
            )
            window.localStorage.setItem(
              'tokenExpiration',
              JSON.stringify(
                format(
                  addMinutes(new Date(), MINUTES_TO_CHECK_FOR_TOKEN_REFRESH),
                  't'
                )
              )
            )
            commit(types.SAVE_USER, response.data.user)
            commit(types.SAVE_TOKEN, response.data.access_token)
            commit(types.EMAIL_VERIFIED, response.data.user.verified)
            buildSuccess(
              null,
              commit,
              resolve,
              router.push({
                name: 'dashboard.index'
              })
            )
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
        })
    })
  },
  refreshToken({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .refreshToken()
        .then((response) => {
          if (response.status === 200) {
            window.localStorage.setItem(
              'access_token',
              response.data.access_token
            )
            window.localStorage.setItem(
              'tokenExpiration',
              JSON.stringify(
                format(
                  addMinutes(new Date(), MINUTES_TO_CHECK_FOR_TOKEN_REFRESH),
                  't'
                )
              )
            )
            commit(types.SAVE_TOKEN, response.data.access_token)
            resolve()
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
        })
    })
  },
  autoLogin({ commit }) {
    const user = JSON.parse(localStorage.getItem('user'))
    commit(types.SAVE_USER, user)
    commit(types.SAVE_TOKEN, localStorage.getItem('access_token'))
    commit(types.SET_LOCALE, JSON.parse(localStorage.getItem('locale')))
    commit(types.EMAIL_VERIFIED, user.verified)
  },
  userLogout({ commit }) {
    window.localStorage.removeItem('access_token')
    window.localStorage.removeItem('tokenExpiration')
    window.localStorage.removeItem('user')
    commit(types.LOGOUT)
    router.push({
      name: 'auth.login'
    })
  },
  userSignUp({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(types.SHOW_LOADING, true)
      api
        .userSignUp(payload)
        .then((response) => {
          if (response.status === 201) {
            window.localStorage.setItem(
              'user',
              JSON.stringify(response.data.user)
            )
            window.localStorage.setItem(
              'access_token',
              response.data.access_token
            )
            commit(types.SAVE_USER, response.data.user)
            commit(types.SAVE_TOKEN, response.data.access_token)
            buildSuccess(
              null,
              commit,
              resolve,
              router.push({
                name: 'dashboard.index'
              })
            )
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
        })
    })
  }
}
