import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Product from './Product'

function ProductList() {
    const {data: {products}} = useLoaderData()
  return (
    <div className='flex flex-wrap mt-5 gap-4'>
        {products.map((product)=>{
            return <Product product={product} key={product.id}/>
        })}
    </div>
  )
}

export default ProductList