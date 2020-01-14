import { Product } from "../entities/Product"

const products:Product[] = [
  {
    name: 'Sledgehammer',
    price: 125.75
  },
  {
    name: 'Axe',
    price: 190.5
  },
  {
    name: 'Bandsaw',
    price: 562.13
  },
  {
    name: 'Chisel',
    price: 12.9
  },
  {
    name: 'Hacksaw',
    price: 18.45
  }
]

export const getProducts = () => {
  return new Promise((resolve, reject) => {
     return setTimeout(()=>{
        resolve(products)
      },2000)
  })
}

export default {
  getProducts
}