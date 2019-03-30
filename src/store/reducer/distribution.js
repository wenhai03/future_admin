import * as TYPES from '../action-types'

let INIT_STATE = {
	distributionList: [],
}

export default function distribution(state = INIT_STATE, action) {
	state = JSON.parse(JSON.stringify(state))
	switch (action.type) {
		case TYPES.DISTRIBUTION_LIST:
			state.distributionList = action.payload.data
			break
	}

	return state
}
