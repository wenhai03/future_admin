import * as TYPES from '../action-types'

let INIT_STATE = {
  rechargeList: [],
  withdrawList: [],
  sellList: [],
  collectList: [],
}

export default function recharge(state = INIT_STATE, action) {
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case TYPES.RECHARGE_LIST:
      state.rechargeList = action.payload.data
      break
  }
  switch (action.type) {
    case TYPES.WITHDRAW_LIST:
      state.withdrawList = action.payload.data
      break
  }
  switch (action.type) {
    case TYPES.COLLECT_LIST:
      state.collectList = action.payload.data
      break
  }
  switch (action.type) {
    case TYPES.SELL_LIST:
      state.sellList = action.payload.data
      break
  }
  return state
}

