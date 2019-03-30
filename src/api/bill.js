import axios from './index'
import {config} from "../config/network"

const url = config.dev.blockChain

export function everydayList(payload) { // 用户管理列表
  return axios.get(`${url}/api/v1/check/dailyCheckData`, {
    params: payload
  });
}


