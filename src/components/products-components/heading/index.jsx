import React from 'react'
import Container from "../../common/containerClass/index"

// React icons
import { IoChevronDown } from "react-icons/io5";


const Heading = () => {
  return (
    <div>
        <Container>
          <div className='flex flex-row justify-between'>
         <h1 className='text-[40px] font-medium text-[#212121] font-rubik'>Shoulder bags</h1>


          <div className='flex flex-row gap-7 items-center mt-[38px]'>
           <p className='text-[16px] text-[#212121E5]'>320 result</p>

           <div className=''>
            <button className='border border-[#D0D0D0] rounded-[8px] py-[6px] pl-[19px] pr-[13px] 
            flex flex-row gap-2 items-center'>
                <h2 className='text-[16px] text-[#212121E5]'>Featured</h2>
                <IoChevronDown/>
            </button>
           </div>

          </div>







          </div>



        </Container>
    </div>
  )
}

export default Heading