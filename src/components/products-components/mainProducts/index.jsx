import React, { useEffect, useState } from 'react'

import Container from "../../common/containerClass/index"
import SingleProduct from '../../products/singleProduct'



const MainProducts = () => {

const [mainProducts, setMainProducts] = useState([])



const fetchMainProducts = async({searchParams}) => {

console.log(searchParams, "searchParams");

const params = new URLSearchParams()

if(searchParams.categories) {
  params.set("category", searchParams.categories)
}

if(searchParams.materials) {
  params.set("material", searchParams.materials)
}

if(searchParams.sizes) {
  params.set("size", searchParams.sizes)
}

if(searchParams.colors) {
  params.set("color", searchParams.colors)
}


const response = await fetch(`http://localhost:3000/featured-products${params.toString()}`)
const data = await response.json()
setMainProducts(data)
}

useEffect(()=> {
    fetchMainProducts({searchParams})
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