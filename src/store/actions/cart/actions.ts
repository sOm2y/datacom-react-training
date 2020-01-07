import { AddProduct, RemoveProduct } from './types'
import { Product } from '../../../entities/Product'
import { CartItem } from '../../../entities/Cart'

export const addCartItem = (product: Product) => ({
  type: AddProduct,
  payload: product
})

export const removeCartItem = (cartItem: CartItem) => ({
  type: RemoveProduct,
  payload: cartItem
})
