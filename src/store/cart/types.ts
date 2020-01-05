import { Product } from '../../entities/Product'
import { CartItem } from '../../entities/Cart'

export const AddProduct = 'ADD_PRODUCT'
export const RemoveProduct = 'REMOVE_PRODUCT'
export const GetProducts = 'GET_PRODUCTS'
export const GetProductsSuccess = 'GET_PRODUCTS_SUCCESS'

interface AddCartItemAction {
  type: typeof AddProduct
  payload: Product
}

interface RemoveCartItemAction {
  type: typeof RemoveProduct
  payload: CartItem
}

export type CartActionTypes = AddCartItemAction | RemoveCartItemAction
