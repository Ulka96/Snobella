import React from 'react'
import Container from '../../common/containerClass'
import SingleProductWithCart from '../singleProductWithCart'

const ProductsWithCart = () => {
  return (
    <Container>

    <div className='flex flex-col gap-6'>
        
        <SingleProductWithCart/>
        <SingleProductWithCart/>
        <SingleProductWithCart/>
       
    </div>

    </Container>
  )
}

export default ProductsWithCart