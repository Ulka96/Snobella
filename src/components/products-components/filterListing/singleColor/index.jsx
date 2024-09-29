import React from 'react'

const SingleColor = ({color, title, goToRoute}) => {
  return (
    <span className={"h-6 w-6 rounded-full border border-[#273142BF]  flex items-center justify-center"}>
    <li onClick={() => goToRoute("color", title)}
    style={{backgroundColor: `#${color.title}`}}
    className={`h-5 w-5 border border-x-2 rounded-full cursor-pointer`}></li>
    </span>
  )
}

export default SingleColor