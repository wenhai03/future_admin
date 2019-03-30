import axios from './index';
import {config} from "../config/network";

const url = config.dev.blockChain
const url_future = config.dev.futureShop

// http://47.244.20.24:8889/api_blockchain/api/v1/usdt/statistics/asset?page=1&size=10&symbol=USDT
export function propertyList(payload) { // 数据管理-资产统计
	let {chain: symbol, page, size } = payload

	return axios.get(`${url}/api/v1/${symbol}/statistics/asset`, {
		params: {page, size, symbol}
	});
}

// http://47.244.20.24:8889/api_futureshop/api/v1/statistics?page=1&size=10
export function distributionList(payload) { // 数据管理-分销统计

	return axios.get(`${url_future}/api/v1/statistics`, {
		params: payload
	});
}
