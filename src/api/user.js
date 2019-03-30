import axios from './index'
import {config} from "../config/network"

const url = config.dev.account

export function userList(payload) { // 用户管理列表
  return axios.get(`${url}/api/v1/account`, {
    params: payload
  });
}


