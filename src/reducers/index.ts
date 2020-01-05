import { combineReducers } from 'redux'
import cartReducer from './cartReducer'

const allReducers = combineReducers({
  cartReducer
})

export type RootState = ReturnType<typeof allReducers>
export default allReducers
