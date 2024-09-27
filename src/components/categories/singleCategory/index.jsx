import React from 'react'
import shoulderBag from "../../../assets/home/images/shoulderBag.png"

const SingleCategory = (props) => {
  return (
    <div className=" bg-[#F5F5F5] rounded-[8px] w-[264px] h-[162px] relative ">
      <h1 className="ml-6 mt-6 text-[18px] font-medium">
        {props.category.title}
      </h1>

      <div className="w-[70%]  absolute right-[-34px] bottom-[-80px]">
        <img
          src={props.category?.coverImage}
          alt="shoulderBag"
          className="overflow-hidden"
        />
      </div>
    </div>
  );
}

export default SingleCategory