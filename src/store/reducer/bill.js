import * as TYPES from '../action-types'

let INIT_STATE = {
  everydayList: [],
}

export default function bill(state = INIT_STATE, action) {
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case TYPES.EVERYDAY:
      state.everydayList = action.payload.data
      break
    default:
      state = state
  }
  return state
}
