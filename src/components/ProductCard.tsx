import React from 'react'
import { Card, Button } from 'antd'

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
