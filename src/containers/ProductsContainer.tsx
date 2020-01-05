import React from 'react'
import { connect } from 'react-redux'
import { Layout, Icon, Row, Col } from 'antd'
import { Product } from '../entities/Product'
import ProductCard from '../components/ProductCard'
import { RootState } from '../reducers'
const { Header, Content } = Layout

interface ProductsContainerProps {
  collapsed: boolean
  products?: Product[]
  toggleCart: () => void
}

export const ProductsContainer: React.FC<ProductsContainerProps> = ({
  ...props
}) => {
  const { products, toggleCart } = props

  return (
    <>
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon className="trigger" type="shopping-cart" onClick={toggleCart} />
      </Header>

      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
          minHeight: 280
        }}
      >
        <Row type="flex">
          {products &&
            products.map((product: Product, key: number) => (
              <Col key={key} span={6}>
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>
      </Content>
    </>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    // products: state.productReducer.products
  }
}

export default connect(mapStateToProps, null)(ProductsContainer)
