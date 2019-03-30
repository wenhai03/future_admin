import axios from './index';
import {config} from "../config/network";

const url_future = config.dev.futureShop

//http://47.244.20.24:8889/api_futureshop/api/v1/bonuses?page=1&size=10
export function distributionList(payload) { // 分销管理-分销用户
	return axios.get(`${url_future}/api/v1/bonuses`, {
		params: payload
	})
}
