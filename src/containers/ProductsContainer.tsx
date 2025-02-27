import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Layout, Icon, Row, Col, Badge } from 'antd'
import { Product } from '../entities/Product'
import ProductCard from '../components/ProductCard'
import { RootState } from '../store/reducers'
import { CartItem } from '../entities/Cart'
import { getProducts } from '../store/actions/product/actions'
const { Header, Content } = Layout

interface ProductsContainerProps {
	collapsed: boolean
	products?: Product[]
	carts?: CartItem[]
  toggleCart: () => void
  getProducts: () => void
}

export const ProductsContainer: React.FC<ProductsContainerProps> = ({
	...props
}) => {
  const { products, toggleCart, getProducts } = props
	useEffect(() => {
		getProducts()
	}, [getProducts])


	const sumCartItem = () => {
		return (
			props.carts &&
			props.carts.reduce((prev, next) => prev + (next['quantity'] || 0), 0)
		)
	}

	return (
		<>
			<Header style={{ background: '#fff', padding: 0 }}>
				<Badge count={sumCartItem()}>
					<Icon className='trigger' type='shopping-cart' onClick={toggleCart} />
				</Badge>
			</Header>

			<Content
				style={{
					margin: '24px 16px',
					padding: 24,
					background: '#fff',
					minHeight: 280
				}}
			>
				<Row type='flex'>
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
		products: state.productReducer.products,
		carts: state.cartReducer.carts
	}
}

const mapDispatchToProps = {
  
    getProducts
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)
