import React from 'react'

// React icons
import { CiDeliveryTruck } from "react-icons/ci";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import { PiLockKey } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import Container from '../common/containerClass';
import { Link } from 'react-router-dom';


const Deliveries = () => {
  return (
    <div className='bg-[#F7F7F7]'>
    <Container>
          <div className='py-12 flex flex-row gap-[47px]'>

           <div className='flex flex-row gap-2 items-center'>
            <CiDeliveryTruck className='w-12 h-12 text-[#007878]'/>
            <Link><p className='text-[16px] font-medium'>Guaranteed delivery</p></Link>
           </div>


           <div className='flex flex-row gap-2 items-center'>
            <HiArrowRightEndOnRectangle className='w-12 h-12 text-[#007878]'/>
            <Link><p className='text-[16px] font-medium'>Do not come back</p></Link>
           </div>


           <div className='flex flex-row gap-2 items-center'>
            <PiLockKey className='w-12 h-12 text-[#007878]'/>
            <Link><p className='text-[16px] font-medium'>Safe and secure shopping</p></Link>
           </div>


           <div className='flex flex-row gap-2 items-center'>
            <MdOutlinePayment className='w-12 h-12 text-[#007878]'/>
            <Link><p className='text-[16px] font-medium'>Payment at the door or online</p></Link>
           </div>


          </div>




    </Container>

    </div>
  )
}

export default Deliveries