import axios from 'axios';
import {config} from "../config/network";

const url = config.dev.url

export function Login(params) { // 登录
	return axios.post(`${url}/api/v1/login`, params)
}

export function sy(params) { // 币 类型
	return axios.post(`${url}/api/v1/login`, params)
}
