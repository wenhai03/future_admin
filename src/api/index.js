import axios from 'axios'
import Qs from 'qs'
import store from '../store'

import { config } from '../config/network'

const url = config.dev.url

axios.defaults.baseURL = url

axios.interceptors.request.use(config =>{
  let token = localStorage.getItem('token')
  config.headers['Content-Type'] = 'application/json;charset=utf-8';
  config.headers.Authorization = token
  return config
})


// axios.defaults.withCredentials = true//=>允许跨域(并且允许携带COOKIE)
// axios.defaults.transformRequest = (data = {}) => Qs.stringify(data)//=>把POST/PUT，通过请求主体传递给服务器的内容，统一处理为X-WWW-URL-ENCODED格式
axios.interceptors.response.use(result => result.data)//=>响应拦截器:把服务返回的信息中响应主体内容拦截返回，以后在THEN中获取的结果就是主体内容
export default axios
