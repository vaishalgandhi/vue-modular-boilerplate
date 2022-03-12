import axios from 'axios'
import * as types from '@/store/mutation-types'
import { handleError } from '@/utils/utils.js'

const getters = {
  allCities: (state) => state.allCities
}

const actions = {
  getAllCities({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/cities/all')
        .then((response) => {
          if (response.status === 200) {
            const cities = []
            const array = response.data
            array.forEach((element) => {
              cities.push(element.name)
            })
            commit(types.FILL_ALL_CITIES, cities)
            resolve()
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
        })
    })
  }
}

const mutations = {
  [types.FILL_ALL_CITIES](state, cities) {
    state.allCities = cities
  }
}

const state = {
  allCities: []
}

export default {
  state,
  getters,
  actions,
  mutations
}
