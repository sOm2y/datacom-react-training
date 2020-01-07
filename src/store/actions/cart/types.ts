import { Product } from '../../../entities/Product'
import { CartItem } from '../../../entities/Cart'

export const AddProduct = 'ADD_PRODUCT'
export const RemoveProduct = 'REMOVE_PRODUCT'


interface AddCartItemAction {
  type: typeof AddProduct
  payload: Product
}

interface RemoveCartItemAction {
  type: typeof RemoveProduct
  payload: CartItem
}

export type CartActionTypes = AddCartItemAction | RemoveCartItemAction
