import * as TYPES from '../action-types'
import {
  powerList,
  levelList, price,
  exchange,
  tranferFee,
  saleFee,
  fixedBonus,
  shareBonus,
  achieveBonus,
  withdrawFee,
  currencyToken,
  integralType,
} from '../../api/system'

let system = {
  /*权限设置*/
  power(payload = {}) {
    let {page = 1, size=10, admin} = payload
    return dispatch => {
      let payload = powerList({page, size, admin})
      dispatch({
        type: TYPES.SYSTEM_POWER,
        payload,
      })
    }
  },
  /*分红设置*/
  fixedBonus(payload = {}){ // 固定分红
    let {page = 1, size=10} = payload
    return dispatch =>{
      dispatch({
        type: TYPES.BONUS_FIXEDBONUS,
        payload: fixedBonus(payload)
      })
    }
  },
  achieveBonus(payload = {}) { // 业绩分红
    let {page = 1, size=10} = payload
    return dispatch => {
      let payload = achieveBonus({page, size})
      dispatch({
        type: TYPES.BONUS_ACHIEVEBONUS,
        payload,
      })
    }
  },
  shareBonus(payload = {}) { // 分销分红
    let {page = 1, size=10} = payload
    return dispatch => {
      let payload = shareBonus({page, size})
      dispatch({
        type: TYPES.BONUS_SHAREBONUS,
        payload,
      })
    }
  },/*分红设置 end*/

  /*等级设置*/
  level(payload = {}) {
    let {page = 1, size=10} = payload
    return dispatch => {
      let payload = levelList({page, size})
      dispatch({
        type: TYPES.SYSTEM_LEVEL,
        payload,
      })
    }
  },

  /*提币设置*/
  withdrawFee() {
    return dispatch => {
      let payload = withdrawFee()
      dispatch({
        type: TYPES.WITHDRAW_FEE,
        payload,
      })
    }
  },

  /*交易设置*/
  price(payload = {}) {
    let {page = 1, size=10} = payload
    return dispatch => {
      let payload = price({page, size})
      dispatch({
        type: TYPES.DEAL_PRICE,
        payload,
      })
    }
  },
  exchange(payload = {}) {
    let {page = 1, size=10} = payload
    return dispatch => {
      let payload = exchange({page, size})
      dispatch({
        type: TYPES.DEAL_EXCHANGE,
        payload,
      })
    }
  },
  tranferFee(payload = {}) {
    let {page = 1, size=10} = payload
    return dispatch => {
      let payload = tranferFee({page, size})
      dispatch({
        type: TYPES.DEAL_TRANFERFEE,
        payload,
      })
    }
  },
  saleFee(payload = {}) {
    let {page = 1, size=10} = payload
    return dispatch => {
      let payload = saleFee({page, size})
      dispatch({
        type: TYPES.DEAL_SALEFEE,
        payload,
      })
    }
  }, /*交易设置 end*/

  /*种类设置*/
  currencyToken(params) {
    return dispatch => {
      let payload = currencyToken(params)
      dispatch({
        type: TYPES.COIN_TOKEN,
        payload,
      })
    }
  },
  integralType(params) {
    return dispatch => {
      let payload = integralType(params)
      dispatch({
        type: TYPES.INTEGRAL_TYPE,
        payload,
      })
    }
  }

}

export default system
