import React, { useEffect, useState } from 'react'
import Container from "../../common/containerClass/index"
import SingleProduct from '../../products/singleProduct'



const MainProducts = () => {

const [mainProducts, setMainProducts] = useState([])



const fetchMainProducts = async(searchParams={}) => {

const params = new URLSearchParams(window.location.search)

console.log(searchParams, "searchparams");


if(searchParams?.category) {
    params.set("category", searchParams?.category)
}

const response = await fetch(`http://localhost:3000/featured-products?${params.toString()}`)
const data = await response.json()
setMainProducts(data)
}

useEffect(()=> {
    fetchMainProducts({})
},[])



  return (
    // <div> 
        <Container>
          <div className='grid grid-cols-2 gap-[23px] w-[93%] ml-auto'>
            
          {
            mainProducts && mainProducts.map((product) => (
              <SingleProduct key={product.id} product={product}/>
            ))
          }



          </div>
        </Container>
    
    // </div>
  )
}

export default MainProducts