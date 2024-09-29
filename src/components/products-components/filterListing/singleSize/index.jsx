import React from 'react'

const SingleSize = ({size, title, goToRoute}) => {
  return (
    <li className='py-[7px] px-[22px] border border-[#C8C8C8] rounded-[8px]'>
      
      <button onClick={()=> goToRoute("size",title)} className='text-[#212121BF]'>
           {size.title}
      </button>


    </li>
  )
}

export default SingleSize