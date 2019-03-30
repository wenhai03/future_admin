import axios from './index';
import {config} from "../config/network";

const url = config.dev.wallet

//http://47.244.20.24:8889/walletandtoken/api/v1/usdt/pool?page=1&size=20
export function walletList(params) { // 币池管理-币池钱包
  let {chain, ...data} = params
  return axios.get(`${url}/api/v1/${chain}/pool`, {
    params: {...data}
  });
}

export function propertyList(params) { // 币池管理-币池钱包-资产管理
  let {chain, ...data} = params
  return axios.get(`${url}/api/v1/${chain}/balance`, {
    params: {...data}
  });
}
