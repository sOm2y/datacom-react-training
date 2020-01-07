import { Product } from '../../entities/Product'
import { GetProductsSuccess, ProductActionTypes } from '../actions/product/types'

export interface ProductsState {
  products: Product[]
}

const initialState: ProductsState = { products: [] }

const productReducer = (state = initialState, action:ProductActionTypes) => {
  switch (action.type) {
    case GetProductsSuccess:
      return { ...state, products: action.payload }

    default:
      return state
  }
}

export default productReducer