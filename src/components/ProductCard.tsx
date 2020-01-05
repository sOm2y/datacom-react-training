import React from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'antd'
import { addCartItem } from '../store/cart/actions'
import { Product } from '../entities/Product';

export const ProductCard = ({ ...props }) => {
  const { product, addProduct } = props
  return (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Card title={product.name} bordered={false}>
        <p>
          {product.price.toLocaleString(undefined, {
            style: 'currency',
            currency: 'NZD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
          })}
        </p>
        <Button
          type="primary"
          onClick={() => {
            /**
             * example for adding products to cart
             */
            addProduct(product)
          }}
        >
          Add to cart
        </Button>
      </Card>
    </div>
  )
}

const mapDispatchToProps = {
  addProduct: (product:Product) => addCartItem(product)
}
export default connect(null, mapDispatchToProps)(ProductCard)
