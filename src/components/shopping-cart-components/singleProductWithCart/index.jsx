import React from 'react'
import laptopbag from "../../../assets/home/images/laptopbag.png"

// React icons
import { FaChevronDown } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiTrash } from "react-icons/fi";




const SingleProductWithCart = () => {
  return (
    <div className='p-4 border border-[#E4E4E4] rounded-[8px] flex flex-row '>
      
    <div className='bg-[#F9F9F9] py-6 px-[14px] rounded-[8px] mr-[25px]'>
      <img src={laptopbag} alt="laptopbag" className='w-[124px] h-[137px]' />
    </div>

    <div>
      <div className='flex flex-row '>
      <h1 className='text-[16px] text-[#212121] font-bold mb-3 '>Hotel Magique Love and Magique Tote Bag</h1>
      <h2 className=''>US $20.00</h2>
      </div>
       <span className='text-[14px] font-normal text-[#212121BF] mr-[23px]'>Size: XS</span>
       <span className='text-[14px] font-normal text-[#212121BF]'>Color: Grey</span>

       <h3 className='text-[14px] font-normal text-[#212121BF] my-2'>Delivery: 25-32 days</h3>
       <h4 className='text-[14px] font-normal text-[#212121BF] mb-2'>Quality</h4>

       <div className='py-[6px] px-[7px] w-[72px] flex flex-row border border-[#E4E4E4] rounded-[3px]'>
        <p className='mr-[6px]'>2 - 9</p>
        <button className=''>
         <FaChevronDown/>
        </button>
       </div>
    </div>


    <div >
    </div>


  <div className='mt-auto flex gap-10 ml-auto'>
  <div className='flex gap-[2px] items-center '>
  <button><IoMdHeartEmpty/></button>
  <p>Favorite</p>
  </div>

  <div className='flex gap-[2px] items-center '>
  <button><FiTrash/></button>
  <p>Remove</p>
  </div>

  </div>



    

    </div>
  )
}

export default SingleProductWithCart