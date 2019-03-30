import * as TYPES from '../action-types'
import dayjs from "dayjs"
import {bigNumberFilter} from '../../utils/bigNumber'

let INIT_STATE = {
  levelList: [],
  powerList: [],
  bonus_fixed: [],
  bonus_share: [],
  bonus_achieve: [],
  deal_price: [],
  deal_exchange: [],
  deal_tranferFee: [],
  deal_saleFee: [],
  withdrawFeeList: [],
  type_coinList: [],
  type_integralList: [],
}

export default function user(state = INIT_STATE, action) {
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case TYPES.SYSTEM_POWER: // 权限设置
      state.powerList = action.payload.data
      break
    case TYPES.BONUS_FIXEDBONUS: // 分红设置 - 固定分红
      if (action.payload.data)  action.payload.data.amount = bigNumberFilter(action.payload.data.amount, 8)
      state.bonus_fixed = action.payload.data
      break
    case TYPES.BONUS_SHAREBONUS: // 分红设置 - 分销分红
      if (action.payload.data.length){
        action.payload.data.forEach(v => {
           v.rate = parseFloat(v.rate) * 100
        })
      }
      state.bonus_share = action.payload.data
      break
    case TYPES.BONUS_ACHIEVEBONUS: // 分红设置 - 业绩分红
      if (action.payload.data.rows.length){
        action.payload.data.rows.forEach(v => {
          v.ratio = parseFloat(v.ratio) * 100
        })
      }
      state.bonus_achieve = action.payload.data
      break
    case TYPES.SYSTEM_LEVEL: // 等级设置
      state.levelList = action.payload.data
    case TYPES.COIN_TOKEN: // 种类设置 - 币种种类
      state.type_coinList = action.payload.data
      break
    case TYPES.INTEGRAL_TYPE: // 种类设置 - 积分种类
      state.type_integralList = action.payload.data
      break
    case TYPES.WITHDRAW_FEE: // 提币设置
      console.log('action.payload.data------', action.payload.data)
      action.payload.data.rows.forEach(v => {
        if (v.token_name === 'USDT') v.fee_rate = bigNumberFilter(v.fee_rate, 8)
        v.max_amount = bigNumberFilter(v.max_amount, 8)
        v.min_pick_amount = bigNumberFilter(v.min_pick_amount, 8)
        v.begin_time = dayjs(v.begin_time).format("YYYY-MM-DD")
        v.end_time = dayjs(v.end_time).format("YYYY-MM-DD")
      })
      state.withdrawFeeList = action.payload.data
      break
    case TYPES.DEAL_PRICE: // 交易设置 - 设置价格
      state.deal_price = action.payload.data
      break
    case TYPES.DEAL_EXCHANGE: // 交易设置 - 兑换手续费
      state.deal_exchange = action.payload.data
      break
    case TYPES.DEAL_TRANFERFEE: // 交易设置 - 转账手续费
      state.deal_tranferFee = action.payload.data
      break
    case TYPES.DEAL_SALEFEE: // 交易设置 - 寄卖手续费
      state.deal_saleFee = action.payload.data
      break
    default:
      state = state
  }

  return state
}
