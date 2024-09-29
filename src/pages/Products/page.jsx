import React from 'react'
import SubHeader from '../../components/layout/header/subHeader'
import MainHeader from '../../components/layout/header/mainHeader'
import TopFooter from '../../components/layout/footer/topFooter'
import MainFooter from '../../components/layout/footer/mainFooter'
import SubFooter from '../../components/layout/footer/subFooter'
import Heading from '../../components/products-components/heading'
import FilterListing from '../../components/products-components/filterListing'
import MainProducts from '../../components/products-components/mainProducts'

const ProductsPage = () => {
  return (
    <div>
            <SubHeader/>
            <MainHeader/>
             
             <Heading/>
              
              <div className='flex flex-row max-w-[1128px] mx-auto mt-8'>
              
              <FilterListing/>
              <MainProducts/>
              </div>

            <TopFooter/>
            <MainFooter/>
            <SubFooter/>

    </div>
  )
}

export default ProductsPage