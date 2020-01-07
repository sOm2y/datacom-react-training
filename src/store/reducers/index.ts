import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import productReducer from './productReducer'

const allReducers = combineReducers({
  cartReducer,
  productReducer
})

export type RootState = ReturnType<typeof allReducers>
export default allReducers
