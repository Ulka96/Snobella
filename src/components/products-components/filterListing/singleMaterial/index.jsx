import React from 'react'

const SingleMaterial = ({material,title, goToRoute}) => {
  return (
    <li onClick={()=> goToRoute("material",title)} className=' cursor-pointer text-[16px] font-normal text-[#212121E5]'>
       {material.title}
    </li>
  
  )
}
 
export default SingleMaterial