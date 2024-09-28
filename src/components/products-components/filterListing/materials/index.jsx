import React, { useEffect, useState } from 'react'
import { FaChevronUp } from 'react-icons/fa6'
import SingleMaterial from '../singleMaterial'

const Materials = () => {

const [materials, setMaterials] = useState([])

const getMaterials = async() => {
const response = await fetch("http://localhost:3000/materials")
const data = await response.json()
setMaterials(data)
}

useEffect(() => {
    getMaterials()
}, [])

  return (
    <div className='pt-4 pb-6 px-10 border border-[#D0D0D0] rounded-[8px]'>
    <div className='flex flex-row justify-between items-center mb-6'>
      <h1 className='text-[20px] font-medium text-[#212121]'>Material</h1>
      <FaChevronUp/>
    </div>
   
    <ul className='flex flex-col gap-4'>
      {
        materials && materials.map((material) => (
            <SingleMaterial material={material}/>
        ))
      }




    </ul>



  </div>
  )
}

export default Materials