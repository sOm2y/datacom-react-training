import { runSaga, stdChannel } from 'redux-saga'
import { Product } from '../../entities/Product'
import { GetProducts, GetProductsSuccess } from '../actions/product/types'
import { getProductsSaga } from './productSaga'
import ProductService from '../../services/ProductService'

const recordSaga = async (saga: any, initialAction: any) => {
	const dispatched = [] as any
	await runSaga(
		{
			channel: stdChannel(),
			dispatch: (action: never) => dispatched.push(action)
		},
		saga,
		initialAction
	).toPromise()
	return dispatched
}

describe('Product saga', () => {
	beforeEach(() => {
		jest.resetAllMocks()
	})
	it('should get products call and return GetProductsSuccess aciton', async () => {
		const expectProducts = [
			{
				name: 'Sledgehammer',
				price: 125.75
			}
		] as Product[]

		ProductService.getProducts = jest
			.fn()
			.mockImplementation(() => expectProducts)

		const dispatched = await recordSaga(getProductsSaga, { type: GetProducts })

		expect(ProductService.getProducts).toHaveBeenCalled()

		expect(dispatched).toContainEqual({
			type: GetProductsSuccess,
			payload: expectProducts
		})
	})
})
