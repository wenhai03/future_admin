import * as TYPES from '../action-types'

let INIT_STATE = {
  propertyList: [],
  distributionList: [],
}

export default function integral(state = INIT_STATE, action) {
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case TYPES.PROPERTY_LIST:
      state.propertyList = action.payload.data
      break
    case TYPES.DATA_DISTRIBUTION_LIST:
      state.distributionList = action.payload.data
      break
    default:
  }

  return state
}
