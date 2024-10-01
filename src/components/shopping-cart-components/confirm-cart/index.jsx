import React from 'react'
import Container from '../../common/containerClass'

const ConfirmCart = () => {
  return (
    <Container>
    <div>

     <div className='py-8 px-6 bg-[#F9F9F9] w-[360px] rounded-[8px]'>
        <div className='flex justify-between text-[#212121]'>
            <h1>Your subtotal</h1>
            <p>US $20.00</p>
        </div>

        <div className='flex justify-between mt-3 mb-5 text-[#212121]'>
            <h1>Shipping changes</h1>
            <p>Free</p>
        </div>

        <div className='flex justify-between text-[18px] font-bold text-[#212121]'>
            <h1>Total</h1>
            <p>US $20.00</p>
        </div>
        
    <hr className='border-dashed my-[22px]' />

    <div className='flex justify-center items-center'>
      <input type="text" placeholder='Discount prome code' className='py-[10px] text-center rounded-tl-lg rounded-bl-lg outline-none' />
      <div><button className='bg-[#FF695E] text-white py-[10px] px-7 rounded-tr-lg rounded-br-lg'>Apply</button></div>

    </div>

     </div>


     <div className='py-3 bg-[#DF4244] flex justify-center items-center text-white rounded-[8px] mt-6 mb-4'>
        <button>Confirm cart</button>
     </div>

     <div className='py-3  flex justify-center items-center rounded-[8px] border border-[#212121] '>
        <button>Cash payment</button>
     </div>



    </div>
    </Container>
  )
}

export default ConfirmCart