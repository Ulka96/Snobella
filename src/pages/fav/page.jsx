import React from "react";
import { useSelector } from "react-redux";
import SingleFav from "./singlefav";

const FavPage = () => {
  const customFav = useSelector((state) => state.cart.customFav);

  return (
    <div>
      {customFav.length > 0 ? (
        customFav.map((single) => <SingleFav key={single} single={single} />)
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
};

export default FavPage;
