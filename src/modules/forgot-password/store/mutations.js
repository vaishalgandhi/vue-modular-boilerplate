import * as types from '@/store/mutation-types'

export default {
  [types.RESET_EMAIL_SENT](state, value) {
    state.resetEmailSent = value
  }
}
