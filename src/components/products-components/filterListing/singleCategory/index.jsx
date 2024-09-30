import React from 'react'

import { useDispatch , useSelector} from 'react-redux'
import {setCategory, selectCategory} from "../../../../store/slices/categories.slice.js"

const SingleCategory = ({category}) => {

const dispatch = useDispatch()

const categoryId = useSelector((state) => state.categories.categoryId);

const categoryHandler = (id) => {
dispatch(setCategory(id))
}


  return (
    <li onClick={() => categoryHandler(category.id) } className={`cursor-pointer text-[16px] ${categoryId === category.id ? "font-bold" : "font-normal"} text-[#212121E5]`}>
       {category.title}
    </li>
      
    
  )
}

export default SingleCategory