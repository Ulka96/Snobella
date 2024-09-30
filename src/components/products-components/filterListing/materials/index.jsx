import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'
import SingleMaterial from '../singleMaterial'

const Materials = ({goToRoute}) => {

const [materials, setMaterials] = useState([])

const getMaterials = async() => {
const response = await fetch("http://localhost:3000/materials")
const data = await response.json()
setMaterials(data)
}

useEffect(() => {
    getMaterials()
}, [])

const [isOpen, setIsOpen] = useState(false)

const toggleDown = () => {
  setIsOpen(!isOpen)
}
 

  return (
    <div className='pt-4 pb-6 px-10 border border-[#D0D0D0] rounded-[8px]'>
    <div onClick={toggleDown} className={`flex flex-row justify-between items-center ${!isOpen && "mb-3"} cursor-pointer`}>
      <h1 className='text-[20px] font-medium text-[#212121]'>Material</h1>
      {isOpen ? <FaChevronUp/> : <FaChevronDown/>}
    </div>
   
{ !isOpen &&  <ul className='flex flex-col gap-4'>
      {
        materials && materials.map((material) => (
            <SingleMaterial key={material.id} material={material} title={material.title} goToRoute={goToRoute}/>
        ))
      }
    </ul>}



  </div>
  )
}

export default Materials