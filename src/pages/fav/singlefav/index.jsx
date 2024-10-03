import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// React icons
import { IoIosHeartEmpty } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";

// Images
import groupstars from "../../../assets/home/images/groupstars.png";

import { useSelector } from "react-redux";
import Container from "../../../components/common/containerClass"


const SingleFav = ({single}) => {

    
  const customFav = useSelector((state) => state.cart.customFav);
  return (
    <Container>
      <div className="grid auto-rows-auto w-full  mx-auto gap-10">
        <div className="pt-[11px] pb-7 px-4 bg-[#F9F9F9] rounded-[8px] mb-7 ">
          <div className="flex flex-row items-center justify-between">
            {single?.new && (
              <div className="py-[2px] px-[22px] text-white bg-[#43D167] rounded-[8px]">
                New
              </div>
            )}
            {single?.discount !== 0 && (
              <div className="py-[2px] px-[22px] text-white bg-[#DF4244] rounded-[8px]">
                {single?.discount} %
              </div>
            )}
            {!(single?.discount || single?.new) && (
              <div className="py-[2px] px-[22px] bg-[#F9F9F9]"></div>
            )}
            {/* Conditionally render the heart icon based on whether the product is in customFav */}
            <div onClick={() => addToFavHandler(single?.product)}>
              {customFav.includes(single?.product) ? (
                <TiHeartFullOutline className="w-[22px] h-[22px] text-red-500 cursor-pointer" />
              ) : (
                <IoIosHeartEmpty className="w-[22px] h-[22px] text-red-500 cursor-pointer" />
              )}
            </div>
          </div>

          <div className="w-[218px] h-[243px] mx-auto">
            <img src={single?.image} alt="laptopbag" />
          </div>

          <div>
            <div className="w-[94px] h-[14px]">
              <img src={groupstars} alt="groupstars" />
            </div>

            <h1 className="text-[16px] font-normal my-4">{single?.title}</h1>

            <div className="flex flex-row gap-[18px] items-center">
              <p className="text-[24px] font-semibold text-[#F75145]">
                ${single?.discountedPrice}.00
              </p>
              <p className="text-[#363636BF] text-[16px] font-normal">
                From ${single?.price}.00
              </p>
            </div>

            <div className="py-[10px] border border-[#212121] rounded-[8px] text-center mt-[39px] flex hover:bg-[#1E90FF] hover:border-none">
              <button
                onClick={() => {
                  addToCartHandler(single?.id);
                }}
                className="text-[16px] font-medium text-[#212121] flex-grow hover:text-white"
              >
                Add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleFav;
