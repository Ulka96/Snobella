import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
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

const [isOpen, setIsOpen] = useState(false)

const toggleDown = () => {
  setIsOpen(!isOpen)
}

  return (
    <div className='pt-4 pb-6 px-10 border border-[#D0D0D0] rounded-[8px]'>
    <div onClick={toggleDown} className={`flex flex-row justify-between items-center ${!isOpen && "mb-3"} cursor-pointer`}>
      <h1 className='text-[20px] font-medium text-[#212121]'>Size</h1>
      {isOpen ? <FaChevronUp/> : <FaChevronDown/>}
    </div>
   
{ !isOpen &&   <ul className='flex flex-row gap-4'>
      
    {
      sizes && sizes.map((size) => (
        <SingleSize key={size.id} size={size} title={size.title} goToRoute={goToRoute}/>
      ))
    }
    </ul>}



  </div>
  )
}

export default Sizes