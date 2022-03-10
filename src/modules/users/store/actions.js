import * as types from '@/store/mutation-types'
import api from '../services'
import { buildSuccess, handleError } from '@/utils/utils.js'

export default {
  getUsers({ commit }, payload) {
    return new Promise((resolve, reject) => {
      api
        .getUsers(payload)
        .then((response) => {
          if (response.status === 200) {
            commit(types.USERS, response.data.docs)
            commit(types.TOTAL_USERS, response.data.totalDocs)
            resolve()
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
        })
    })
  },
  editUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const data = {
        name: payload.name,
        email: payload.email,
        role: payload.role,
        phone: payload.phone,
        city: payload.city,
        country: payload.country
      }
      api
        .editUser(payload._id, data)
        .then((response) => {
          if (response.status === 200) {
            buildSuccess(
              {
                msg: 'common.SAVED_SUCCESSFULLY'
              },
              commit,
              resolve
            )
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
        })
    })
  },
  saveUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      api
        .saveUser(payload)
        .then((response) => {
          if (response.status === 201) {
            buildSuccess(
              {
                msg: 'common.SAVED_SUCCESSFULLY'
              },
              commit,
              resolve
            )
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
        })
    })
  },
  deleteUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      api
        .deleteUser(payload)
        .then((response) => {
          if (response.status === 200) {
            buildSuccess(
              {
                msg: 'common.DELETED_SUCCESSFULLY'
              },
              commit,
              resolve
            )
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
        })
    })
  }
}
