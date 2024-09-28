import React from 'react'
import { Link } from 'react-router-dom'

const SingleMaterial = ({material}) => {
  return (
    <Link to="#"><li className='text-[16px] font-normal text-[#212121E5]'>
       {material.title}
    </li>
    </Link>
  )
}

export default SingleMaterial