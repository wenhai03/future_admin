import axios from './index';
import {config} from "../config/network";

const url = config.dev.api_order
const url_future = config.dev.futureShop

//http://47.244.20.24:8889/api_order/api/v1/usdt/pool?page=1&size=20
export function rechargeList(params) { // 订单管理-充币订单
  let {chain, type, page, size} = params // type格式:[]  3->充值订单 2-> 提币 6-> 归集
  return axios.post(`${url}/api/v1/${chain}/order`, {
    type, page, size
  });
}

export function withdrawList(params) { // 订单管理-提币订单
  let {chain, type, page, size} = params
  return axios.post(`${url}/api/v1/${chain}/order`, {
    type, page, size
  });
}
export function collectList(params) { // 订单管理-归集订单
  let {chain, type, page, size} = params
  return axios.post(`${url}/api/v1/${chain}/order`, {
    type, page, size
  });
}

export function sellList(params) { // 订单管理-寄卖订单
  return axios.get(`${url_future}/api/v1/gaoding`, {
    params
  });
}

