import { GetProducts } from './types'
import { Product } from '../../../entities/Product'

export const getProducts = () => ({
	type: GetProducts
})

export const getProductsSuccess = (products: Product[]) => ({
	type: GetProducts,
	payload: products
})
