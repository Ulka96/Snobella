import React, { useEffect, useState } from 'react'
import Container from "../../common/containerClass/index"
import SingleProduct from '../../products/singleProduct'



const MainProducts = () => {

const [mainProducts, setMainProducts] = useState([])

const fetchMainProducts = async() => {
const response = await fetch("http://localhost:3000/featured-products")
const data = await response.json()
setMainProducts(data)
}

useEffect(()=> {
    fetchMainProducts()
},[])




  return (
    // <div> 
        <Container>
          <div className='grid grid-cols-2 auto-rows-auto gap-[23px] flex-shrink w-[70%]'>
            
          {
            mainProducts && mainProducts.map((product) => (
              <SingleProduct product={product}/>
            ))
          }



          </div>
        </Container>
    
    // </div>
  )
}

export default MainProducts