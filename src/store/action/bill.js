import * as TYPES from '../action-types'
import { everydayList } from '../../api/bill'

let bill = {
  everyday(payload = {}) {
    let {page = 1, size=10} = payload
    return dispatch => {
      let payload = everydayList({page, size})
      dispatch({
        type: TYPES.EVERYDAY,
        payload,
      })
    }
  },
}

export default bill
