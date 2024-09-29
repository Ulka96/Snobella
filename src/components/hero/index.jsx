import React from 'react'
import bags from "../../assets/home/images/bags.png"
import Container from '../common/containerClass'


const Hero = () => {
  return (
    <div className='bg-[#FFE2E0]'>
    <Container>
    <div className='py-6 flex flex-row mx-auto justify-between'>

    <div className='pt-[75px]'>
      <p className='text-[24px] font-medium text-[#DF4244]'>30% off</p>
      <h1 className='text-[40px] font-bold text-[#212121]'>Handbag products</h1>
      <h3 className='w-[453px] mb-12 mt-2 text-[16px] text-[#212121BF] leading-[27px]'>It is a long established fact that a reader will be distracted by the readable content expound the actual teachings of the great explorer</h3>
    <div className=' bg-[#206363] rounded-[8px] text-white justify-center flex w-[192px]'>
      <button className='py-3'>Shop now</button>
    </div>
    </div>


    <div className='w-[642px] h-[535px]'>
       <img src={bags} alt="bags" />
    </div>

    </div>
    </Container>
    </div>
  )
}

export default Hero
