import React, { useEffect, useState } from 'react'
import Container from '../common/containerClass'
import SingleProduct from './singleProduct'

import chevronleft from "../../assets/home/icons/chevronleft.png"


const Products = () => {

    const [products, setProducts] = useState([]);
    // const sliderRef = useRef(null);
  

      const fetchProducts = async () => {
        const response = await fetch("http://localhost:3000/products?featured-products=true");
        const data = await response.json();
        setProducts(data);
      };
      
      useEffect(() => {
        fetchProducts()
      }, [])



    
  
  return (
    <div>
      <Container>
        <div className='mt-24'>

          <div className='mb-11 flex flex-row justify-between'>
          <h1 className='text-[32px] font-medium'>Featured Products</h1>

           <div className='flex flex-row gap-2'>
            <p>View all products</p>
            <button className='w-5 h-5'>
              <img src={chevronleft} alt="chevronleft" />
            </button>
           </div>

          </div>
      
       <div className='grid grid-cols-3 auto-rows-auto gap-6 '>
          
          {
            products && products.map((product) => (
               <SingleProduct key={product.id} product={product}/>             
            ))
          }


       





       </div>
       </div>
      </Container>
    </div>
  )
}

export default Products