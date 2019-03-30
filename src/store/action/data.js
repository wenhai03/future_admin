import * as TYPES from '../action-types'
import {propertyList, distributionList} from "../../api/data";

let data = {
	distribution(payload={}) {
		let {page = 1, size=10} = payload

		return dispatch => {
			let payload = distributionList({page, size})
			dispatch({
				type: TYPES.PROPERTY_LIST,
				payload,
			})
		}
	},
	property(payload={}) {
		let {page = 1, size=10, ...res} = payload
		const {chain} = res

		return dispatch => {
			let payload = propertyList({page, size, chain})
			dispatch({
				type: TYPES.DATA_DISTRIBUTION_LIST,
				payload,
			})
		}
	}
}
export default data
