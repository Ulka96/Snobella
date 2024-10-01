import React, { useState } from "react";


// React icons
import { IoIosHeartEmpty } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";

// Images
import groupstars from "../../../assets/home/images/groupstars.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cart.slice";

const SingleProduct = (props) => {
  const [heart, setHeart] = useState(false);

  const heartToggle = () => {
    setHeart(!heart);
  };
  
  const dispatch = useDispatch()
  const productCount = useSelector((state) => state.cart.productCount)
  const customCart = useSelector((state) => state.cart.customCart)


  const addToCartHandler = (id) => {

    const foundProd = customCart.find((elem) => elem.id === id)

    if(foundProd) {
       const newCart = customCart.map((elem) => {
        if(elem.id === foundProd.id) {
          elem.count = elem.count + 1
        }
        return elem;
       })

       dispatch(addToCart({customCart: newCart}))
       console.log(newCart);
    }
    else {

      dispatch(addToCart([...customCart, {id:id, count: 1}]))
    }

    // const newCount = productCount+1 
  }



  return (
    <div className="pt-[11px] pb-7 px-4 bg-[#F9F9F9] rounded-[8px]">
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
        <div onClick={heartToggle}>
          {!heart ? (
            <TiHeartFullOutline className="w-[22px] h-[22px] text-red-500" />
          ) : (
            <IoIosHeartEmpty className="w-[22px] h-[22px] text-red-500" />
          )}
        </div>
      </div>

      <div className="w-[218px] h-[243px] mx-auto">
        <img src={props.product?.image} alt="laptopbag" />
      </div>

      <div>
        <div className="w-[94px] h-[14px]">
          <img src={groupstars} alt="groupstars" />
        </div>

        <h1 className="text-[16px] font-normal my-4">{props.product?.title}</h1>

        <div className="flex flex-row gap-[18px] items-center">
          <p className="text-[24px] font-semibold text-[#F75145]">
            ${props.product?.discountedPrice}.00
          </p>
          <p className="text-[#363636BF] text-[16px] font-normal">
            From ${props.product?.price}.00
          </p>
        </div>

        <div className="py-[10px] border border-[#212121] rounded-[8px] text-center mt-[39px] flex hover:bg-[#1E90FF] hover:border-none">
          <button onClick={() => {
            addToCartHandler(props.product.id)
          }} className="text-[16px] font-medium text-[#212121] flex-grow hover:text-white">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
