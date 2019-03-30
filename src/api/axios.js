import axios from 'axios'
import JsonP from 'jsonp'

import { config } from '../config/network';

const env = process.env.ENV;
const prefix = env === 'prod' ? config.prod.account : config.dev.account;

export default class Axios{
	static jsonp(options){
		return new Promise((resolve, reject) => {
			JsonP(options.url, {
				param: 'callback'
			}, function (err, response) {
				if (response.status === 'success') {
					resolve(response);
				} else {
					reject(response.messsage);
				}
			})
		})
	}

	static axios (options) {
		let loading;
		if (options.data && options.data.isShowLoading !== false) {
			loading = document.getElementById('ajaxLoading')
			loading.style.display = 'block'
		}
		// let baseApi = 'https://www.easy-mock.com/mock/5c2f2e637106f779e7eacbd6/mockapi'
		return new Promise((resolve, reject) => {
			axios({
				url: options.url,
				method: 'get',
				// baseURL: baseApi,
				timeout: 5000,
				params: (options.data && options.data.params) || ''
			}).then((res) => {
				if (res.status === 200) {
					loading = document.getElementById('ajaxLoading');
					loading.style.display = 'none';
					resolve(res.data)
				}
			}).catch((err) => console.log('err---', err))
		})
	}
}
