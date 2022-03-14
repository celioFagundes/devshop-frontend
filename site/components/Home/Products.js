import React from 'react'
import CardProduct from '../CardProduct'

const Products = ({ products }) => {
  return (
    <div className='py-3'>
        <div className='bg-blue-500 py-2 px-4 font-medium text-white mb-5'>
            Confira nossos produtos
        </div>
        <div>
        {products && products.map(product => <CardProduct product={product} />)}
        </div>
      
    </div>
  )
}

export default Products
