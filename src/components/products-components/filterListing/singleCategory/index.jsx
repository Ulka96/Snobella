import React from 'react'
import { Link } from 'react-router-dom'

const SingleCategory = ({category}) => {
  return (
    <Link to="#"><li className='text-[16px] font-normal text-[#212121E5]'>
       {category.title}
    </li>
    </Link>
  )
}

export default SingleCategory