import React from "react";

// React icons
import { IoIosHeartEmpty } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";

// Images
import laptopbag from "../../../assets/home/images/laptopbag.png";
import groupstars from "../../../assets/home/images/groupstars.png";

const SingleProduct = (props) => {
  return (
    <div className="pt-[11px] pb-7 px-4 bg-[#F9F9F9]">
      <div className="flex flex-row items-center justify-between">
        {props.product.new && (
          <div className="py-[2px] px-[22px] text-white bg-[#43D167] rounded-[8px]">
            New
          </div>
        )}
        {props.product.discount !== 0 && (
          <div className="py-[2px] px-[22px] text-white bg-[#DF4244] rounded-[8px]">
            {props.product.discount} %
          </div>
        )}
        {!(props.product.discount || props.product.new) && (
          <div className="py-[2px] px-[22px] bg-[#F9F9F9]"></div>
        )}
        <div>
          {props.product.fav ? (
            <TiHeartFullOutline className="w-[22px] h-[22px] text-red-500" />
          ) : (
            <IoIosHeartEmpty className="w-[22px] h-[22px] text-red-500" />
          )}
        </div>
      </div>

      <div className="w-[218px] h-[243px] mx-auto">
        <img src={laptopbag} alt="laptopbag" />
      </div>

      <div>
        <div className="w-[94px] h-[14px]">
          <img src={groupstars} alt="groupstars" />
        </div>

        <h1 className="text-[16px] font-normal my-4">
          Shoulder Bag Leather Bag Leather undertakes laborious physical
          physical
        </h1>

        <div className="flex flex-row gap-[18px] items-center">
          <p className="text-[24px] font-semibold text-[#F75145]">$130.00</p>
          <p className="text-[#363636BF] text-[16px] font-normal">
            From $340.00
          </p>
        </div>

        <div className="py-[10px] border border-[#212121] rounded-[8px] text-center mt-[39px]">
          <button className="text-[16px] font-medium text-[#212121]">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
