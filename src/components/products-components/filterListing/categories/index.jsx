import React, { useEffect, useState } from 'react'

// react icons
import { FaChevronUp } from "react-icons/fa6";
import SingleCategory from '../singleCategory';


const Categories = () => {

const [categories, setCategories] = useState([])

const getCategories = async() => {
const response = await fetch("http://localhost:3000/categories")
const data = await response.json()
 setCategories(data)
}

useEffect(() => {
    getCategories()
}, [])

  return (
    <div className='pt-4 pb-6 px-10 border border-[#D0D0D0] rounded-[8px]'>
      <div className='flex flex-row justify-between items-center mb-6'>
        <h1 className='text-[20px] font-medium text-[#212121]'>Categories</h1>
        <FaChevronUp/>
      </div>
     
      <ul className='flex flex-col gap-4'>
        
        {
            categories && categories.map((category) => (
                <SingleCategory category={category}/>
            ))
        }



      </ul>



    </div>
  )
}

export default Categories