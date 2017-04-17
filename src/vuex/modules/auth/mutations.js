import {
 TOGGLE_LOADING,
 TOGGLE_SEARCHING,
 SET_USER,
 SET_TOKEN
} from './mutation-type'

const mutations = {
  [TOGGLE_LOADING] (state) {
    state.callingAPI = !state.callingAPI
  },
  [TOGGLE_SEARCHING] (state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  [SET_USER] (state, user) {
    state.user = user
  },
  [SET_TOKEN] (state, token) {
    state.token = token
  }
}

export default mutations
