import * as types from '@/store/mutation-types'
import appConfig from '@/config'

const getters = {
  appTitle: (state) => state.appTitle,
  appVersion: (state) => state.appVersion
}

const actions = {
  setAppVersion({ commit }, payload) {
    commit(types.SET_APP_VERSION, payload)
  }
}

const mutations = {
  [types.SET_APP_VERSION](state, version) {
    state.appVersion = version
  }
}

const state = {
  appTitle: appConfig.appTitle,
  appVersion: appConfig.appVersion
}

export default {
  state,
  getters,
  actions,
  mutations
}
