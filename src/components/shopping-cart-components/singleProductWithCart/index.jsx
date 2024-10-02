import React from 'react';
import { FaChevronDown } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiTrash } from "react-icons/fi";

const SingleProductWithCart = ({ product, quantity }) => {
  return (
    <div className='p-4 border border-[#E4E4E4] rounded-[8px] flex flex-row'>
      
      <div className="p-4 bg-[#F9F9F9] rounded-lg w-[150px] h-[180px]">
        <img src={product.image} alt="" className="rounded-lg"/>
      </div>

      <div className="flex flex-col">
        <div className="flex w-[534px] justify-between">
          <p className="font-medium text-[#212121] text-[16px]">
            {product.title}
          </p>
          <p className="text-[18px] font-medium text-[#212121]">US ${(product.discountedPrice * quantity).toFixed(2)}</p>
        </div>
        <div className="flex items-center gap-6 mb-2">
          <p className="text-[#212121] text-opacity-75 text-[14px]">
            Size : {product.size}
          </p>
          <div className='flex flex-row items-center'>

          <p className="text-[#212121] text-opacity-75 text-[14px]">
            Color : 
          </p>
          <span style={{backgroundColor: `#${product.color}`}}
             className={`h-6 w-6 border border-x-2 rounded-full cursor-pointer`}></span>
             </div>
        </div>
        <div className="mb-2">
          <p className="text-[#212121] text-opacity-75 text-[14px]">
            Count : {quantity}
          </p>
        </div>
        <div className="mb-2">
          <p className="text-[#212121] text-opacity-75 text-[14px]">Quality</p>
        </div>
        <div>
          <select>
            <option>2-9</option>
            <option>10-49</option>
            <option>50</option>
          </select>
        </div>
      </div>

      <div className='mt-auto flex gap-10 ml-auto'>
        <div className='flex gap-[2px] items-center'>
          <button><IoMdHeartEmpty /></button>
          <p>Favorite</p>
        </div>

        <div className='flex gap-[2px] items-center'>
          <button><FiTrash /></button>
          <p>Remove</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProductWithCart;
