import React from 'react'
import Heading from '../../components/shopping-cart-components/heading'
import ProductsWithCart from '../../components/shopping-cart-components/products-with-cart'
import ConfirmCart from '../../components/shopping-cart-components/confirm-cart'

const ShoppingCart = () => {
  return (
    <div>
      <Heading/>
      <div className='flex flex-row gap-6 max-w-[1128px] mx-auto'>
      <ProductsWithCart/>
      <ConfirmCart/>
      </div>
    </div>
  )
}

export default ShoppingCart
