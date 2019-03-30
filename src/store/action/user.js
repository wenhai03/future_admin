import * as TYPES from '../action-types'
import { userList } from '../../api/user'

let user = {
  user(payload = {}) {
    let {page = 1, size=20} = payload
    return dispatch => {
      let payload = userList({page, size})
      dispatch({
        type: TYPES.USER_LIST,
        payload,
      })
    }
  },
}

export default user
