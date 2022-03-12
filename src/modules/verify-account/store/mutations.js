import * as types from '@/store/mutation-types'

export default {
  [types.EMAIL_VERIFIED](state, value) {
    state.emailVerified = value
  }
}
