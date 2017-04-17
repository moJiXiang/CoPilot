import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  callingAPI: false,
  searching: '',
  serverURI: 'http://10.110.1.136:8080',
  user: null,
  token: null,
  userInfo: {
    messages: [{1: 'test', 2: 'test'}],
    notifications: [],
    tasks: []
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
