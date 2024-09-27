import React, { useState } from "react";

// React icons
import { IoIosHeartEmpty } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";

// Images
import groupstars from "../../../assets/home/images/groupstars.png";

const SingleSeller = (props) => {
  const [heart, setHeart] = useState(false);

  const heartToggle = () => {
    setHeart(!heart);
  };


  return (
    <div className="pt-[11px] pb-7 px-4 bg-[#F9F9F9]">
      <div className="flex flex-row items-center justify-between">
        {props.bestSeller.new && (
          <div className="py-[2px] px-[22px] text-white bg-[#43D167] rounded-[8px]">
            New
          </div>
        )}
        {props.bestSeller.discount !== 0 && (
          <div className="py-[2px] px-[22px] text-white bg-[#DF4244] rounded-[8px]">
            {props.bestSeller.discount} %
          </div>
        )}
        {!(props.bestSeller.discount || props.bestSeller.new) && (
          <div className="py-[2px] px-[22px] bg-[#F9F9F9]"></div>
        )}
        <div onClick={heartToggle}>
          {!heart ? (
            <TiHeartFullOutline className="w-[22px] h-[22px] text-red-500" />
          ) : (
            <IoIosHeartEmpty className="w-[22px] h-[22px] text-red-500" />
          )}
        </div>
      </div>

      <div className="w-[218px] h-[243px] mx-auto">
        <img src={props.bestSeller?.image} alt="laptopbag" />
      </div>

      <div>
        <div className="w-[94px] h-[14px]">
          <img src={groupstars} alt="groupstars" />
        </div>

        <h1 className="text-[16px] font-normal my-4">
          {props.bestSeller?.title}
        </h1>

        <div className="flex flex-row gap-[18px] items-center">
          <p className="text-[24px] font-semibold text-[#F75145]">
            ${props.bestSeller?.discountedPrice}.00
          </p>
          <p className="text-[#363636BF] text-[16px] font-normal">
            From ${props.bestSeller?.price}.00
          </p>
        </div>

        <div className="py-[10px] border border-[#212121] rounded-[8px] text-center mt-[39px] flex hover:bg-[#1E90FF] hover:border-none">
          <button className="text-[16px] font-medium text-[#212121] flex-grow hover:text-white">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleSeller;
