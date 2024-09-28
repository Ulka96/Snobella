import React from 'react'
import Container from '../../common/containerClass'
import Categories from './categories'
import Materials from './materials'
import Price from './prices'
import Sizes from './sizes'
import Colors from './colors'

const FilterListing = () => {
  return (
    // <div>
      <Container>
        <div className='w-[326px] space-y-6 flex-shrink'>

         
         <Categories/>
         <Materials/>
         <Price/>
         <Sizes/>
         <Colors/>



        </div>
      </Container>

    // </div>
  )
}

export default FilterListing