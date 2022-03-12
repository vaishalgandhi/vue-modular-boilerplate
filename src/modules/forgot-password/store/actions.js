import * as types from '@/store/mutation-types'
import api from '../services'
import { buildSuccess, handleError } from '@/utils/utils.js'

export default {
  forgotPassword({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(types.SHOW_LOADING, true)
      api
        .forgotPassword(payload)
        .then((response) => {
          if (response.status === 200) {
            commit(types.RESET_EMAIL_SENT, true)
            buildSuccess(
              {
                msg: 'forgotPassword.RESET_EMAIL_SENT',
                params: [payload.email],
                timeout: 0
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
