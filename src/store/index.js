import Vue from 'vue'
import Vuex from 'vuex'
import genericModules from '@/store/modules'
import { store as privateModules } from '@/modules'

Vue.use(Vuex)
const modules = privateModules.modules

export const store = new Vuex.Store({
  modules: {
    ...genericModules,
    ...modules
  }
})

if (window.Cypress) {
  // Only available during E2E tests
  window.__store__ = store
}
