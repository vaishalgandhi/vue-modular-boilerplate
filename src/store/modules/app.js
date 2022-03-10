import * as types from '@/store/mutation-types'
import appConfig from '@/app.config.json'

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
  appTitle: 'Vue Modular Boilerplate',
  appVersion: appConfig.version
}

export default {
  state,
  getters,
  actions,
  mutations
}
