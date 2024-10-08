import React from "react";
import Container from "../../../common/containerClass";

import { Link } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";


// Images
import logoSnobella from "../../../../assets/home/images/Snobella.png";
import searchIcon from "../../../../assets/home/icons/search.png";
import profile from "../../../../assets/home/icons/profile.png";
import heart from "../../../../assets/home/icons/heart.png";
import bag from "../../../../assets/home/icons/bag.png";

import { loginHandler } from "../../../../store/slices/register.slice";
import { addToCart , addToFav} from "../../../../store/slices/cart.slice";

const MainHeader = () => {
  const dispatch = useDispatch();
  const navElements = [
    {
      id: "1",
      title: "Evening bags",
    },

    {
      id: "2",
      title: "Shoulder bag",
    },

    {
      id: "3",
      title: "Backpack",
    },
    {
      id: "4",
      title: "Handbag",
    },
    {
      id: "5",
      title: "Postman bag",
    },
    {
      id: "6",
      title: "Belt bags",
    },
  ];

  // const productCount = useSelector((state) => state.cart.productCount);

  const isLogin = useSelector((state) => state.register.isLogin);

  const customCart = useSelector((state) => state.cart.customCart);

  const totalProducts = customCart.reduce(
    (total, item) => total + item.count,
    0
  );

  return (
    <div>
      <Container>
        <div className="pt-7 pb-6 flex flex-col ">
          <div className="flex flex-row items-center">
            <div className="w-[156px] h-[40px]">
              <Link to="/">
                <img src={logoSnobella} alt="logoSnobella" />
              </Link>
            </div>

            <div className="flex flex-row pl-4 pr-3 py-[15px] bg-[#F7F9FC] rounded-[8px] w-[504px] justify-between ml-[108px] mr-[57px]">
              <div>
                <input
                  type="text"
                  placeholder="Search all product"
                  className="bg-[#F7F9FC] w-full outline-none"
                />
              </div>
              <div className="w-6 h-6">
                <img src={searchIcon} alt="searchIcon" />
              </div>
            </div>

            <div>
              <ul className="flex flex-row gap-[26px] ">
                <Link>
                  <li className="flex flex-row">
                    <div className="w-6 h-6 mr-[10px]">
                      <img src={profile} alt="profile" />
                    </div>
                    {!isLogin ? (
                      <Link to="/sign-up">
                        <p className="text-[14px] font-medium text-[#2E2E2E]">
                          Sign up
                        </p>
                      </Link>
                    ) : (
                      <Link to="/">
                        <button
                          onClick={() => {
                            dispatch(loginHandler({ isLogin: false }));

                            localStorage.clear();
                             dispatch(addToCart([]));
                             dispatch(addToFav([]));
                             navigate("/sign-in");
                          }}
                          className="text-[14px] font-medium text-[#2E2E2E]"
                        >
                          Logout
                        </button>
                      </Link>
                    )}
                  </li>
                </Link>

                <Link to="/fav">
                  <li className="flex flex-row">
                    <div className="w-6 h-6 mr-[10px]">
                      <img src={heart} alt="profile" />
                    </div>
                    <p className="text-[14px] font-medium text-[#2E2E2E]">
                      Wishlist
                    </p>
                  </li>
                </Link>

                <Link to="/cart">
                  <li className="flex flex-row">
                    <div className="w-6 h-6 mr-[10px]">
                      <img src={bag} alt="profile" />
                    </div>
                    <p className="text-[14px] font-medium text-[#2E2E2E]">
                      Basket
                      <hr />
                      <span>{totalProducts}</span>
                    </p>
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="mt-[31px]">
            <ul className="flex flex-row gap-[54px] text-[16px] text-[#273142] font-normal">
              {navElements &&
                navElements.map((element) => (
                  <Link>
                    <li key={element.id}>{element.title}</li>
                  </Link>
                ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainHeader;
