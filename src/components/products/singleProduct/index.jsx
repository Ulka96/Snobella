import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// React icons
import { IoIosHeartEmpty } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";

// Images
import groupstars from "../../../assets/home/images/groupstars.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToFav } from "../../../store/slices/cart.slice";
import { FaRegStar } from "react-icons/fa";

const SingleProduct = (props) => {
  const dispatch = useDispatch();
  const productCount = useSelector((state) => state.cart.productCount);
  const customCart = useSelector((state) => state.cart.customCart);
  const customFav = useSelector((state) => state.cart.customFav);

  console.log(customFav);

  const navigate = useNavigate();

  const addToCartHandler = (id) => {
    if (localStorage.getItem("isLogin")) {
      const foundProd = customCart.find((elem) => elem.id === id);
      let newCart = [];

      if (foundProd) {
        newCart = customCart.map((elem) => {
          if (elem.id === foundProd.id) {
            return {
              ...elem, // Spread the existing object to ensure immutability
              count: elem.count + 1, // Update the count immutably
            };
          }
          return elem;
        });

        dispatch(addToCart(newCart));
        localStorage.setItem("cart", JSON.stringify(newCart)); // Save to localStorage
      } else {
        newCart = [...customCart, { id: id, count: 1 }];
        dispatch(addToCart(newCart));
        localStorage.setItem("cart", JSON.stringify(newCart)); // Save to localStorage
      }
    } else {
      navigate("/sign-in");
    }
  };

  const addToFavHandler = (id) => {
    let newFav = [];

    const foundProd = customFav.find((elem) => elem === id);

    if (foundProd) {
      newFav = customFav.filter((elem) => elem !== id); // Remove product if it's already favorited
    } else {
      newFav = [...customFav, id]; // Add product if it's not favorited
    }

    dispatch(addToFav(newFav));

    // Save the updated customFav to localStorage
    localStorage.setItem("customFav", JSON.stringify(newFav));
  };

  const stars = 
  [
    { id: 1 }, 
    { id: 2 }, 
    { id: 3 }, 
    { id: 4 }, 
    { id: 5 }
  ];

 
  const ratingStar = async (id, starId) => {
    try {
      const response = await fetch(`http://localhost:3000/products/${id}`);
      const data = await response.json();
         
      console.log(data)
      const ratingSum = (starId + data.rating.rate) / 2;

      const updateResponse = await fetch(
        `http://localhost:3000/products/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
        
      );
       console.log(updateResponse);

      if (!updateResponse.ok) {
        throw new Error("Failed to update rating");
      }

      const updatedData = await updateResponse.json();
      console.log("Updated product rating:", updatedData);
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  };


  return (
    <div className="pt-[11px] pb-7 px-4 bg-[#F9F9F9] rounded-[8px]">
      <div className="flex flex-row items-center justify-between">
        {props?.product?.new && (
          <div className="py-[2px] px-[22px] text-white bg-[#43D167] rounded-[8px]">
            New
          </div>
        )}
        {props?.product?.discount !== 0 && (
          <div className="py-[2px] px-[22px] text-white bg-[#DF4244] rounded-[8px]">
            {props?.product?.discount} %
          </div>
        )}
        {!(props?.product?.discount || props?.product?.new) && (
          <div className="py-[2px] px-[22px] bg-[#F9F9F9]"></div>
        )}
        {/* Conditionally render the heart icon based on whether the product is in customFav */}
        <div onClick={() => addToFavHandler(props?.product)}>
          {customFav.includes(props?.product) ? (
            <TiHeartFullOutline className="w-[22px] h-[22px] text-red-500 cursor-pointer" />
          ) : (
            <IoIosHeartEmpty className="w-[22px] h-[22px] text-red-500 cursor-pointer" />
          )}
        </div>
      </div>

      <div className="w-[218px] h-[243px] mx-auto">
        <img src={props?.product?.image} alt="laptopbag" />
      </div>

      <div>
        <div className="w-[94px] h-[14px] flex flex-row gap-1">
          {stars &&
            stars.map((star) => (
              <FaRegStar
                onClick={() => ratingStar(props.product.id, star.id)}
                className="text-yellow-500 cursor-pointer"
              />
            ))}
        </div>

        <p>{props.product.rating.rate}</p>

        <h1 className="text-[16px] font-normal my-4">
          {props?.product?.title}
        </h1>

        <div className="flex flex-row gap-[18px] items-center">
          <p className="text-[24px] font-semibold text-[#F75145]">
            ${props?.product?.discountedPrice}.00
          </p>
          <p className="text-[#363636BF] text-[16px] font-normal">
            From ${props?.product?.price}.00
          </p>
        </div>

        <div className="py-[10px] border border-[#212121] rounded-[8px] text-center mt-[39px] flex hover:bg-[#1E90FF] hover:border-none">
          <button
            onClick={() => {
              addToCartHandler(props?.product?.id);
            }}
            className="text-[16px] font-medium text-[#212121] flex-grow hover:text-white"
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
