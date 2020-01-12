import React, { useState } from 'react'
import { Layout } from 'antd'
import CartContainer from './containers/CartContainer'
import ProductsContainer from './containers/ProductsContainer'
import './App.scss'

const App: React.FC = () => {
  /**
   * useState and useEffect example
   */
  const [collapsed, setCollapsed] = useState(false)

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
        collapsed={collapsed}
        toggleCart={toggleCart}
      />
    </Layout>
  )
}

export default App
