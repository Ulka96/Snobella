import React from 'react'

import { setColor } from '../../../../store/slices/filter.slice'
import { useDispatch, useSelector } from 'react-redux'

const SingleColor = ({color, title}) => {

 const dispatch = useDispatch() 

 const colorId = useSelector((state) => state.filter.colorId)

  const colorHandler = (id) => {
    dispatch(setColor(id))
    }

  return (

    <span className={`{${colorId === color.id && "h-6 w-6 rounded-full border border-[#273142BF] "} flex items-center justify-center`}>
    <li onClick={() => colorHandler(color.id) } 
    style={{backgroundColor: `#${color.title}`}}
    className={`h-5 w-5 border border-x-2 rounded-full cursor-pointer`}></li>
    </span>
  )
}

export default SingleColor