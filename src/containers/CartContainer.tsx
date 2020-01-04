import React, { useEffect, useState } from 'react'
import { List, Drawer, Button } from 'antd'
import { Cart } from '../entities/Cart'
interface CartContainerProps {
  carts?: Cart[]
  collapsed: boolean,
  onClose: () => void,
  removeProduct?: (cartItem: Cart) => void
}
export const CartContainer: React.FC<CartContainerProps> = ({ ...props }) => {

  const { collapsed, onClose, carts } = props

  const [totalPrice, setTotalPrice] = useState<number>(0)

  /**
   *  example for fixing missing dependency warning when using useEffect React Hook
   */
  const calculateTotalPrice = () => {
    if (carts) {
      let totalPrice = carts
        .map(item => item.quantity * item.product.price)
        .reduce((prev, curr) => prev + curr, 0)
      setTotalPrice(totalPrice)
    }
  }

  useEffect(() => {
    // calculateTotalPrice()
  }, [carts])

  return (
    <Drawer
      width={720}
      title="shopping cart"
      placement="right"
      closable={true}
      onClose={onClose}
      visible={collapsed}
    >
      <List
        itemLayout="horizontal"
        dataSource={carts}
        footer={
          <div>
            <b>{`Total price : ${totalPrice.toLocaleString(undefined, {
              style: 'currency',
              currency: 'NZD',
              minimumFractionDigits: 0,
              maximumFractionDigits: 2
            })}`}</b>
          </div>
        }
        renderItem={(cartItem: Cart, index) => (
          <List.Item
            key={index}
            actions={[
              /**
               *  example for removing cart item/product
               */
              <Button onClick={() => { }}> Remove </Button>
            ]}
          >
            <List.Item.Meta
              title={cartItem.product.name}
              description={(
                cartItem.product.price * cartItem.quantity
              ).toLocaleString(undefined, {
                style: 'currency',
                currency: 'NZD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
              })}
            />
            <p> x {cartItem.quantity}</p>
          </List.Item>
        )}
      />
    </Drawer>
  )
}


