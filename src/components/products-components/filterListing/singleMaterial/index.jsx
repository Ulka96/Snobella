import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {setMaterial} from "../../../../store/slices/materials.slice.js"

const SingleMaterial = ({material}) => {

const dispatch = useDispatch()

const materialId = useSelector((state) => state.materials.materialId);


const materialHandler = (id) => {
  dispatch(setMaterial(id))
}


  return (
    <li onClick= {() => materialHandler(material.id) }className={`cursor-pointer text-[16px] ${materialId === material.id ? "font-bold" : "font-normal"} text-[#212121E5]`}>
       {material.title}
    </li>
  
  )
}
 
export default SingleMaterial