import { CartItem } from '../../entities/Cart'
import {
  CartActionTypes,
  AddProduct,
  RemoveProduct
} from '../actions/cart/types'

export interface CartsState {
  carts: CartItem[]
}

export const initialState: CartsState = { carts: [] }
const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case AddProduct:
    // TODO: TO BE IMPLEMENT
    break

    case RemoveProduct:
    // TODO: TO BE IMPLEMENT
    break

    default:
      return state
  }
}

export default cartReducer
