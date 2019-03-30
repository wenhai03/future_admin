import * as TYPES from '../action-types'

let INIT_STATE = {
  address: '',
  chain: '',
  walletList: [],
  propertyList: [],
}

export default function wallet(state = INIT_STATE, action) {
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case TYPES.WALLET_LIST:
      state.walletList = action.payload.data
      break
    case TYPES.WALLET_PROPERTY_LIST:
      state.walletList = action.payload.data
      break
    case TYPES.COIN_SAVE_INFO:
      state.chain = action.payload.chain
      state.address = action.payload.address
      break
  }

  return state
}
