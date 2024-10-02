import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { setSize } from '../../../../store/slices/filter.slice';

const SingleSize = ({size, title, goToRoute}) => {


  const dispatch = useDispatch();

  const sizeId = useSelector((state) => state.filter.sizeId);

  const sizeHandler = (id) => {
    dispatch(setSize(id));
  };
  return (
    <li
      className={`py-[7px] px-[22px] border border-[#C8C8C8] rounded-[8px]  ${
        sizeId === size.id && "bg-black"
      }`}
    >
      <button
        onClick={() => sizeHandler(size.id)}
        className={`text-[#212121BF]  ${sizeId === size.id && "text-white"}`}
      >
        {size.title}
      </button>
    </li>
  );
}

export default SingleSize