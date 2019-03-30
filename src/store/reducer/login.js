import * as TYPES from '../action-types'

let INIT_STATE = {
  chain: 'usdt',
  loginInfo: {},
  token: ''
}

export default function login(state = INIT_STATE, action) {
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case TYPES.LOGIN:
      state.loginInfo = action.payload.data
      state.token = action.payload.data.token
      break
  }
  return state
}
