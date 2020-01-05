import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import { CartContainer } from './containers/CartContainer'
import { ProductsContainer } from './containers/ProductsContainer'
import { getProducts } from './services/ProductService'
import { Product } from './entities/Product'
import './App.scss'

const App: React.FC = () => {
  /**
   * useState and useEffect example
   */
  const [collapsed, setCollapsed] = useState(false)
  const [products, setProducts] = useState<Product[] | undefined>(undefined)

  useEffect(() => {
    /**
     * example for getting products from API call
     */
    getProducts().then((res: any) => {
      setProducts(res)
    })
  }, [])

  const toggleCart = () => {
    setCollapsed(!collapsed)
  }
  const onClose = () => {
    setCollapsed(false)
  }

  return (
    <Layout className="App">
      <CartContainer collapsed={collapsed} onClose={onClose} />
      <ProductsContainer
        products={products}
        collapsed={collapsed}
        toggleCart={toggleCart}
      />
    </Layout>
  )
}

export default App
