import { CartItem } from '../entities/Cart'
import { CartActionTypes, AddProduct, RemoveProduct } from '../store/cart/types'

export interface CartsState {
  carts: CartItem[]
}

const initialState: CartsState = { carts: [] }
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
              ? { ...item, quantity: addedProduct }
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
        action.payload.quantity -= 1
        return {
          ...state,
          carts: state.carts.filter(item =>
            item.product.name === action.payload.product.name
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
        }
      }

    default:
      return state
  }
}

export default cartReducer
