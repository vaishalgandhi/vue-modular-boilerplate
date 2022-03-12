import * as types from '@/store/mutation-types'

export default {
  [types.SHOW_CHANGE_PASSWORD_INPUTS](state, value) {
    state.showChangePasswordInputs = value
  }
}
