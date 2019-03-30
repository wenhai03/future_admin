import * as TYPES from '../action-types'

let INIT_STATE = {
  integralList: [],
}

export default function integral(state = INIT_STATE, action) {
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case TYPES.INTEGRAL_LIST:
      state.integralList = action.payload.data
      break
    default:
  }

  return state
}
