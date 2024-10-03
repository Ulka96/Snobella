import React from "react";
import { useSelector } from "react-redux";
import SingleFav from "./singlefav";

const FavPage = () => {
  
  const customFav = useSelector((state) => state.cart.customFav);

  return (
    <div>
      {customFav &&
        customFav.map((single) => <SingleFav single={single} />)}
    </div>
  );
};

export default FavPage;
