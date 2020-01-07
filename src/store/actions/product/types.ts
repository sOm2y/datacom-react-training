import { Product } from '../../../entities/Product'

export const GetProducts = 'GET_PRODUCTS'
export const GetProductsSuccess = 'GET_PRODUCTS_SUCCESS'

interface GetProductsAction{
	type: typeof GetProducts
}

interface GetProductsSuccessAction {
	type: typeof GetProductsSuccess
	payload: Product[]
}

export type ProductActionTypes = GetProductsAction | GetProductsSuccessAction
