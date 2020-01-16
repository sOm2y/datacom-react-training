import React from 'react'
import {shallow} from 'enzyme'
import configureStore from 'redux-mock-store'
import ProductCard from './ProductCard'

describe('Component test for <ProductCard />',()=>{
    const mockedStore = {}
    const mockStore = configureStore()
    let store,component:any
    beforeEach(()=>{
        store = mockStore(mockedStore)
        component = shallow(<ProductCard store={store} />)
    })
    it('should display product container component',()=>{
        expect(component.length).toBe(1)
        expect(component).toMatchSnapshot()
    })
})
