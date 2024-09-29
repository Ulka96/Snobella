import React, { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa6'
import SingleSize from '../singleSize'

const Sizes = ({goToRoute}) => {

  
const [sizes, setSizes] = useState([])

const getSizes = async() => {
const response = await fetch("http://localhost:3000/sizes")
const data = await response.json()
setSizes(data)
}

useEffect(() => {
   getSizes()
}, [])


  return (
    <div className='pt-4 pb-6 px-10 border border-[#D0D0D0] rounded-[8px]'>
    <div className='flex flex-row justify-between items-center mb-6'>
      <h1 className='text-[20px] font-medium text-[#212121]'>Size</h1>
      <FaChevronUp/>
    </div>
   
    <ul className='flex flex-row gap-4'>
      
    {
      sizes && sizes.map((size) => (
        <SingleSize key={size.id} size={size} title={size.title} goToRoute={goToRoute}/>
      ))
    }



    </ul>



  </div>
  )
}

export default Sizes