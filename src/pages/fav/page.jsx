import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SingleFav from "./singlefav";

const FavPage = () => {
  const customFav = useSelector((state) => state.cart.customFav);

  // const [favProducts, setFavProducts] = useState([])
 
  // const fetchfav = async() => {
  // const response = await fetch(`http://localhost:3000/products/${id}`);
  // const data = await response.json()

  // setFavProducts(data);
  // }

  // useEffect(() => {
  //   if (customFav.length > 0) {
  //     fetchfav();
  //   }
  // }, [customFav]);


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
