import axios from './index'
import {config} from "../config/network"

const url_account = config.dev.account
const url_future = config.dev.futureShop
const url_integral = config.dev.integralChain
const url_wallet = config.dev.wallet
const url_split = config.dev.distribution
const url_blockchain = config.dev.blockChain

export function powerList(payload) { // 权限设置
  return axios.get(`${url_account}/api/v1/account`, {
    params: payload
  })
}
/*归集设置*/
export function collect(payload) {
  return axios.get(`${url_account}/api/v1/account`, {
    params: payload
  })
}
/*分红设置*/
export function fixedBonus(payload) { // 固定分红
  return axios.get(`${url_future}/api/v1/CRC`)
}
export function shareBonus(payload) { // 分销分红
  return axios.get(`${url_split}/api/v1/manage`, {
    params: payload
  })
}
export function achieveBonus(payload) { // 业绩分红
  return axios.get(`${url_future}/api/v1/gradeBonus`, {
    params: payload
  })
}
export function achieveBonus111(payload) {
  return axios.get(`${url_future}/api/v1/gradeSetting`, {
    params: payload
  })
} /*分红设置 end*/

export function levelList(payload) { // 等级设置
  return axios.get(`${url_future}/api/v1/gradeSetting`, {
    params: payload
  })
}
/*提币设置*/
export function withdrawFee(payload) { // 提币手续费
  return axios.get(`${url_blockchain}/api/v1/pickCoinFee`)
}
export function withdrawLimit(payload) { // 提币额度管理
  return axios.get(`${url_account}/api/v1/xxx`, {
    params: payload
  })
}

/* 交易设置*/
export function price(payload) { // 设置价格
  return axios.get(`${url_future}/api/v1/coin_config`, {
    params: payload
  })
}
export function exchange(payload) { // 兑换手续费
  return axios.get(`${url_future}/api/v1/getFee`)
}
export function tranferFee() { // 转账手续费
  return axios.get(`${url_blockchain}/api/v1/transferFee`)
}
export function saleFee() { // 寄卖手续费
  return axios.get(`${url_future}/api/v1/settings/saleFee`)
}

/*种类设置*/
export function currencyToken(params) { // token 币种种类
  let {chain} = params
  return axios.get(`${url_wallet}/api/v1/${chain}/token`)
}
export function integralType(params) { // 积分种类
  let {chain} = params
  return axios.get(`${url_integral}/api/v1/${chain}/integral_kinds/query`)
}

