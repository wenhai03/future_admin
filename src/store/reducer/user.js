import * as TYPES from '../action-types'

let INIT_STATE = {
  userList: [],
}

export default function user(state = INIT_STATE, action) {
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case TYPES.USER_LIST:
      state.userList = action.payload.data
      break
    default:
      state = state
  }

  return state
}
