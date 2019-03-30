import * as TYPES from '../action-types'
import { Login } from '../../api/login'

let login = {
	Login(params) {
		return {
			type: TYPES.LOGIN,
			payload: Login(params)
		}
	},
}
export default login
