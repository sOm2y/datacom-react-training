import { Product } from '../../entities/Product'
import { ProductActionTypes } from '../actions/product/types'

export interface ProductsState {
  products: Product[]
}

const initialState: ProductsState = { products: [] }

const productReducer = (state = initialState, action:ProductActionTypes) => {
  switch (action.type) {

    default:
      return state
  }
}

export default productReducer