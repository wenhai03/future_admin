import axios from './index';
import {config} from "../config/network";

const url = config.dev.integralChain

export function integralList(payload) { // 币池管理-币池钱包
  // let {chain, ...data} = params
  return axios.get(`${url}/api/v1/integral_records`, {
    params: payload
  });
}

