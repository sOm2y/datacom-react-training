import cartReducer, { initialState, CartsState } from './cartReducer'
import { CartActionTypes, AddProduct, RemoveProduct } from '../actions/cart/types'
import { CartItem } from '../../entities/Cart'

describe('Cart Reducer', () => {
	it('should inital state correctly', () => {
		expect(cartReducer(undefined, {} as CartActionTypes)).toEqual(initialState)
    })
    
	it('should add product to cart if product is not existed in the cart', () => {
		const expectedState = {
			carts: [{ product: { name: 'product', price: 10 }, quantity: 1 }]
        }
        
		expect(
			cartReducer(
				{ carts: [] } as CartsState,
				{
					type: AddProduct,
					payload: { name: 'product', price: 10.0 }
				} as CartActionTypes
			)
		).toEqual(expectedState)
    })

    it('should add product quantity if product has already existed in the cart', () => {
		const expectedState = {
			carts: [{ product: { name: 'product', price: 10.0 }, quantity: 2 }]
        }

		expect(
            cartReducer(
                { carts: [{ product: { name: 'product', price: 10.0 }, quantity: 1 }] } as CartsState,
                {
                    type: AddProduct,
                    payload: { name: 'product', price: 10.0 }
                } as CartActionTypes
            )
		).toEqual(expectedState)
    })
    

    it('should remove product quantity if product has already existed in the cart', () => {
		const expectedState = {
			carts: [{ product: { name: 'product', price: 10 }, quantity: 2 }]
        } as CartsState

		expect(
            cartReducer(
                { carts: [{ product: { name: 'product', price: 10 }, quantity: 3 }] } as CartsState,
                {
                    type: RemoveProduct,
                    payload: { product: { name: 'product', price: 10 }, quantity: 3 } as CartItem
                } as CartActionTypes
            )
		).toEqual(expectedState)
	})

	it('should remove product item if product only has one item in the cart', () => {
		const expectedState = {
			carts: []
        } as CartsState

		expect(
            cartReducer(
                { carts: [{ product: { name: 'product', price: 10 }, quantity: 1 }] } as CartsState,
                {
                    type: RemoveProduct,
                    payload: { product: { name: 'product', price: 10 }, quantity: 1 } as CartItem
                } as CartActionTypes
            )
		).toEqual(expectedState)
	})
})