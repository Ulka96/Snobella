// React hooks
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// React icons
import { IoIosHeartEmpty } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";
import { FaRegStar, FaStar } from "react-icons/fa";

// Redux hooks
import { useSelector, useDispatch } from "react-redux";

// Actions
import { addToCart, addToFav } from "../../../store/slices/cart.slice";


const SingleProduct = ({product}) => {

  const dispatch = useDispatch();
  const customCart = useSelector((state) => state.cart.customCart);
  const customFav = useSelector((state) => state.cart.customFav);

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  // Check if the user has already rated this product
  useEffect(() => {
    const ratedProducts = JSON.parse(localStorage.getItem("ratedProducts")) || [];
    if (ratedProducts.includes(product.id)) {
      setHasRated(true); // User has already rated
    }
  }, [product.id]);

  // Cart adding
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


  // Fav 
  const addToFavHandler = (product) => {
    let newFav = [];

    const foundProd = customFav.find((elem) => elem === product);

    if (foundProd) {
      newFav = customFav.filter((elem) => elem !== product); // Remove product if it's already favorited
    } else {
      newFav = [...customFav, product]; // Add product if it's not favorited
    }

    dispatch(addToFav(newFav));

    // Save the updated customFav to localStorage
    localStorage.setItem("customFav", JSON.stringify(newFav));

    console.log(newFav)
  };
  

  const stars = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];

  // Open the rating modal only if the user is signed in and hasn't rated the product yet
  const handleRatingClick = () => {
    if (!localStorage.getItem("isLogin")) {
      navigate("/sign-in"); // Redirect to sign-in if not logged in
    } else if (hasRated) {
      alert("You have already rated this product.");
    } else {
      setIsModalOpen(true); // Open modal
    }
  };

  // Handle star selection in the modal
  const handleStarClick = (starId) => {
    setSelectedRating(starId === selectedRating ? 0 : starId); // Toggle star selection
  };

  // Handle rating submission
  const submitRating = async () => {
    try {
      const response = await fetch(`http://localhost:3000/products/${product.id}`);
      const data = await response.json();

      const newRating = (data.rating.rate * data.rating.count + selectedRating) / (data.rating.count + 1);
      const newCount = data.rating.count + 1; // Increment the count by 1

      // Create an updated product object with the new rating and updated count
    const updatedProduct = {
      ...data,
      rating: {
        ...data.rating,
        rate: newRating,
        count: newCount, // Update the count as well
      },
    };

      const updateResponse = await fetch(`http://localhost:3000/products/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!updateResponse.ok) {
        throw new Error("Failed to update rating");
      }

      const updatedData = await updateResponse.json();
      console.log("Updated product rating:", updatedData);

      // Save the product ID to localStorage to mark it as rated
      const ratedProducts = JSON.parse(localStorage.getItem("ratedProducts")) || [];
      ratedProducts.push(product.id);
      localStorage.setItem("ratedProducts", JSON.stringify(ratedProducts));

      setHasRated(true); // Mark product as rated
      setIsModalOpen(false); // Close modal after submission
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  };

  return (
    <div className="pt-[11px] pb-7 px-4 bg-[#F9F9F9] rounded-[8px]">
      <div className="flex flex-row items-center justify-between">
        {product?.new && (
          <div className="py-[2px] px-[22px] text-white bg-[#43D167] rounded-[8px]">
            New
          </div>
        )}
        {product?.discount !== 0 && (
          <div className="py-[2px] px-[22px] text-white bg-[#DF4244] rounded-[8px]">
            {product?.discount} %
          </div>
        )}
        {!(product?.discount || product?.new) && (
          <div className="py-[2px] px-[22px] bg-[#F9F9F9]"></div>
        )}
        {/* Conditionally render the heart icon based on whether the product is in customFav */}
        <div onClick={() => addToFavHandler(product)}>
      {customFav.includes(product) ? (
        <TiHeartFullOutline className="w-[22px] h-[22px] text-red-500 cursor-pointer" />
      ) : (
        <IoIosHeartEmpty className="w-[22px] h-[22px] text-red-500 cursor-pointer" />
      )}
    </div>
      </div>

      <div className="w-[218px] h-[243px] mx-auto">
        <img src={product?.image} alt="laptopbag" />
      </div>


      <div>
        <div className="w-[94px] h-[14px] flex flex-row gap-1" onClick={handleRatingClick}>
          {stars.map((star) => (
            <span key={star.id}>
              {star.id <= Math.round(product.rating.rate) ? (
                <FaStar className="text-yellow-500 cursor-pointer" />
              ) : (
                <FaRegStar className="text-yellow-500 cursor-pointer" />
              )}
            </span>
          ))}
        </div>

        <p>{product.rating.rate.toFixed(1)}</p>


        <h1 className="text-[16px] font-normal my-4">
          {product?.title}
        </h1>

        <div className="flex flex-row gap-[18px] items-center">
          <p className="text-[24px] font-semibold text-[#F75145]">
            ${product?.discountedPrice}.00
          </p>
          <p className="text-[#363636BF] text-[16px] font-normal">
            From ${product?.price}.00
          </p>
        </div>

        <div className="py-[10px] border border-[#212121] rounded-[8px] text-center mt-[39px] flex hover:bg-[#1E90FF] hover:border-none">
          <button
            onClick={() => {
              addToCartHandler(product?.id);
            }}
            className="text-[16px] font-medium text-[#212121] flex-grow hover:text-white"
          >
            Add to card
          </button>
        </div>
      </div>

      {/* Rating Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="mb-4 text-xl">Rate This Product</h3>
            <div className="flex justify-center gap-2 mb-4">
              {stars.map((star) => (
                <span key={star.id} onClick={() => handleStarClick(star.id)}>
                  {star.id <= selectedRating ? (
                    <FaStar className="text-yellow-500 cursor-pointer text-2xl" />
                  ) : (
                    <FaRegStar className="text-yellow-500 cursor-pointer text-2xl" />
                  )}
                </span>
              ))}
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={submitRating}
            >
              Submit Rating
            </button>
            <button
              className="mt-2 text-red-500 hover:underline"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
