import * as TYPES from '../action-types'
import { integralList } from '../../api/integral'

let integral = {
  integral(payload = {}) {
    let {page = 1, size=10, ...res} = payload
    const {chain} = res
    return dispatch => {
      let payload = integralList({page, size, chain})
      dispatch({
        type: TYPES.INTEGRAL_LIST,
        payload,
      })
    }
  },
}
export default integral
