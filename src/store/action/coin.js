import * as TYPES from '../action-types'
import { walletList, propertyList } from '../../api/coin'

let coin = {
  wallet(payload = {}) {
    let {page = 1, size=10, ...res} = payload, {chain} = res
    return async dispatch => {
      let payload = await walletList({page, size, chain})
      dispatch({
        type: TYPES.WALLET_LIST,
        payload,
      })
    }
  },
  property(params = {}) {
    return async dispatch => {
      let payload = await propertyList(params)
      dispatch({
        type: TYPES.WALLET_PROPERTY_LIST,
        payload,
      })
    }
  },
  saveInfo(payload) {
    return dispatch  => {
      dispatch({
        type: TYPES.COIN_SAVE_INFO,
        payload
      })
    }
  }
}
export default coin
