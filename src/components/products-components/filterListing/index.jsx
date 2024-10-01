import React from 'react'
import Container from '../../common/containerClass'
import Categories from './categories'
import Materials from './materials'
import Price from './prices'
import Sizes from './sizes'
import Colors from './colors'
import ClearFilter from './clearButton'

const FilterListing = () => {



  return (
    // <div>
      <Container>
        <div className=' space-y-6'>

         <ClearFilter/>
         <Categories />
         <Materials />
         <Price/>
         <Sizes />
         <Colors />



        </div>
      </Container>

    // </div>
  )
}

export default FilterListing