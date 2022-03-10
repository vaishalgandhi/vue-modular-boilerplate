import * as types from '@/store/mutation-types'

export default {
  [types.FILL_PROFILE](state, data) {
    state.profile.verified = data.verified
    state.profile.name = data.name
    state.profile.email = data.email
    state.profile.phone = data.phone
    state.profile.city = data.city
    state.profile.country = data.country
    state.profile.urlTwitter = data.urlTwitter
    state.profile.urlGitHub = data.urlGitHub
  },
  [types.ADD_PROFILE_DATA](state, data) {
    switch (data.key) {
      case 'name':
        state.profile.name = data.value
        break
      case 'phone':
        state.profile.phone = data.value
        break
      case 'city':
        state.profile.city = data.value
        break
      case 'country':
        state.profile.country = data.value
        break
      case 'urlTwitter':
        state.profile.urlTwitter = data.value
        break
      case 'urlGitHub':
        state.profile.urlGitHub = data.value
        break
      default:
        break
    }
  }
}
