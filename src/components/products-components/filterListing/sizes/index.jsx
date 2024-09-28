import React from 'react'
import { FaChevronUp } from 'react-icons/fa6'
import SingleSize from '../singleSize'

const Sizes = () => {
  return (
    <div className='pt-4 pb-6 px-10 border border-[#D0D0D0] rounded-[8px]'>
    <div className='flex flex-row justify-between items-center mb-6'>
      <h1 className='text-[20px] font-medium text-[#212121]'>Size</h1>
      <FaChevronUp/>
    </div>
   
    <ul className='flex flex-row gap-4'>
      
     <SingleSize/>
     <SingleSize/>
     <SingleSize/>



    </ul>



  </div>
  )
}

export default Sizes