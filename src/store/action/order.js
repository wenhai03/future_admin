import * as TYPES from '../action-types'
import { rechargeList, withdrawList, sellList, collectList } from '../../api/order'

let order = {
  recharge(payload = {}) {
    let {page = 1, size=10, ...res} = payload, {chain} = res
    return dispatch => {
      let payload = rechargeList({page, size, chain, ...res})
      dispatch({
        type: TYPES.RECHARGE_LIST,
        payload,
      })
    }
  },
  withdraw(payload={}) {
    let {page = 1, size=10, ...res} = payload, {chain} = res
    return dispatch => {
      let payload = withdrawList({page, size, chain, ...res})
      dispatch({
        type: TYPES.WITHDRAW_LIST,
        payload,
      })
    }
  },
  sell(payload={}) {
    let {page = 1, size=10} = payload
    return dispatch => {
      let payload = sellList({page, size})
      dispatch({
        type: TYPES.SELL_LIST,
        payload,
      })
    }
  },
  collect(payload={}) {
    let {page = 1, size=10, ...res} = payload, {chain} = res
    return dispatch => {
      let payload = collectList({page, size, chain, ...res})
      dispatch({
        type: TYPES.COLLECT_LIST,
        payload,
      })
    }
  }
}
export default order
