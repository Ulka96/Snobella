import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleCategory = ({category, title, goToRoute}) => {



  return (
    <li onClick={()=> goToRoute("category",title)} className='cursor-pointer text-[16px] font-normal text-[#212121E5]'>
       {category.title}
    </li>
    
    
    
  )
}

export default SingleCategory