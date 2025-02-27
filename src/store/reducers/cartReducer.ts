import { CartItem } from '../../entities/Cart'
import { CartActionTypes, AddProduct, RemoveProduct } from '../actions/cart/types'

export interface CartsState {
  carts: CartItem[]
}

export const initialState: CartsState = { carts: [] }
const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case AddProduct:
      const addedProduct = state.carts.find(
        item => item.product.name === action.payload.name
      )
      //if product is exist in shopping cart, quantity plus one
      if (addedProduct) {
        addedProduct.quantity += 1
        return {
          ...state,
          carts: state.carts.filter(item =>
            item.product.name === addedProduct.product.name
              ? { ...item, quantity: addedProduct.quantity }
              : item
          )
        }
        //otherwise add product to shopping cart
      } else {
        return {
          ...state,
          carts: [...state.carts, { product: action.payload, quantity: 1 }]
        }
      }

    case RemoveProduct:
      if (action.payload.quantity === 1) {
        return {
          ...state,
          carts: [
            ...state.carts.filter(
              item => item.product.name !== action.payload.product.name
            )
          ]
        }
      } else {
        return {
          ...state,
          carts: state.carts.filter(item =>
            item.product.name === action.payload.product.name
              ? { ...item, quantity: item.quantity -=1 }
              : item
          )
        }
      }

    default:
      return state
  }
}

export default cartReducer
