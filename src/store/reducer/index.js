import {combineReducers} from 'redux'
import user from './user'
import login from './login'
import coin from './coin'
import integral from './integral'
import order from "./order"
import distribution from "./distribution"
import data from "./data"
import bill from "./bill"
import system from "./system"

let reducer = combineReducers({
  user,
  login,
  coin,
  integral,
  order,
  distribution,
  data,
  bill,
  system,
})

export default reducer
