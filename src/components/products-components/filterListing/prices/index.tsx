import React from 'react'
import { FaChevronUp } from 'react-icons/fa6'
import { IoSearchSharp } from "react-icons/io5";


const Price = () => {
  return (
    <div className='pt-4 pb-6 px-10 border border-[#D0D0D0] rounded-[8px]'>
      <div className='flex flex-row justify-between items-center mb-6'>
        <h1 className='text-[20px] font-medium text-[#212121]'>Price</h1>
        <FaChevronUp/>
      </div>

     <div className='flex flex-row'>
        <div className='py-[7px] pl-5 w-[72px] pr-6 border border-[#C8C8C8] rounded-[8px]'>
        <input type="text" className='w-full focus:outline-none' placeholder='$10' />
        </div>

        <p className='text-[#212121BF] mx-[6px] my-auto'>-</p>

        <div className='py-[7px] pl-5 w-[72px] pr-6 border border-[#C8C8C8] rounded-[8px]'>
        <input type="text" className='w-full focus:outline-none' placeholder='$50' />
        </div>

        <div className='flex items-center'>
            <button className='py-[10px] px-4 bg-[#EF544F] rounded-[8px] ml-4 '>
                <IoSearchSharp className='text-white'/>
            </button>
        </div>


     </div>



    </div>
  )
}

export default Price