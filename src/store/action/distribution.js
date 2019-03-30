import * as TYPES from '../action-types'
import { distributionList } from '../../api/distribution'
import {userList} from "../../api/user";

let distribution = {
	distribution(payload={}) {
		let {page = 1, size=10} = payload

		return dispatch => {
			let payload = distributionList({page, size})
			dispatch({
				type: TYPES.DISTRIBUTION_LIST,
				payload,
			})
		}
	}
}
export default distribution
