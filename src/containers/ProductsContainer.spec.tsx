import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import ProductsContainer from './ProductsContainer'

describe('Component test for <ProductsContainer />', () => {
	const mockedState = {
		productReducer: { products: [{ name: 'Axe', price: 190.5 }] },
		cartReducer: {
			carts: [{ product: { name: 'Axe', price: 190.5 }, quantity: 1 }]
		}
	}
	const mockStore = configureStore()
	let store, component:any
	beforeEach(() => {
		store = mockStore(mockedState)
		component = shallow(<ProductsContainer store={store} />)
	})
	it('should display product container component', () => {
        expect(component.length).toBe(1)
        expect(component).toMatchSnapshot()
	})
})
