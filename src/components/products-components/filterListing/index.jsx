import React from 'react'
import Container from '../../common/containerClass'
import Categories from './categories'
import Materials from './materials'
import Price from './prices'
import Sizes from './sizes'
import Colors from './colors'
import { useNavigate } from 'react-router-dom'

const FilterListing = () => {

  const navigate = useNavigate()

  const goToRoute = (key, title) => {

    const params = new URLSearchParams(window.location.search)
    params.set(key, title)

    // navigate(`/products?${key}=${title}`)

    navigate(`/products?${params.toString()}`)

  }

  return (
    // <div>
      <Container>
        <div className=' space-y-6'>

         
         <Categories goToRoute={goToRoute}/>
         <Materials goToRoute={goToRoute}/>
         <Price/>
         <Sizes goToRoute={goToRoute}/>
         <Colors goToRoute={goToRoute}/>



        </div>
      </Container>

    // </div>
  )
}

export default FilterListing