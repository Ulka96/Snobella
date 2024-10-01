import React from 'react'

import {filterHandle} from "../../../../store/slices/filter.slice.js"
import { useDispatch } from 'react-redux';
const ClearFilter = () => {

    const dispatch = useDispatch()

    


  return (
    <div className="pt-2 pb-2 px-10 border border-[#D0D0D0] rounded-[8px] flex items-center  hover:bg-black hover:text-white ">
      <button onClick={() => {
        dispatch(filterHandle());
      } } className="text-[20px]">
        Clear Filter
      </button>
    </div>
  );
};

export default ClearFilter
