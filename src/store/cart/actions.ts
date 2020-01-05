import { AddProduct, RemoveProduct } from './types'
import { Product } from '../../entities/Product'
import { CartItem } from '../../entities/Cart'

export const addProduct = (product: Product) => ({
  type: AddProduct,
  payload: product
})

export const removeProduct = (cartItem: CartItem) => ({
  type: RemoveProduct,
  payload: cartItem
})
