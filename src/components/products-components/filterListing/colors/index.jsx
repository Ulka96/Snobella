import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import SingleColor from '../singleColor'

const Colors = ({goToRoute}) => {

    
const [colors, setColors] = useState([])

const getColors = async() => {
const response = await fetch("http://localhost:3000/colors")
const data = await response.json()
setColors(data)
}

useEffect(() => {
   getColors()
}, [])

const [isOpen, setIsOpen] = useState(false)

const toggleDown = () => {
  setIsOpen(!isOpen)
}


  return (
    <div className='pt-4 pb-6 px-10 border border-[#D0D0D0] rounded-[8px]'>
    <div onClick={toggleDown} className={`flex flex-row justify-between items-center ${!isOpen && "mb-3"} cursor-pointer`}>
      <h1 className='text-[20px] font-medium text-[#212121]'>Color</h1>
      {isOpen ? <FaChevronUp/> : <FaChevronDown/>}
    </div>
   
{ !isOpen &&    <ul className='flex flex-row gap-3 flex-wrap'>
      {
        colors && colors.map((color) => (
          <SingleColor key={color.id} color={color} title={color.title} goToRoute={goToRoute}/>
        ))
      }

    </ul>}



  </div>
  )
}

export default Colors