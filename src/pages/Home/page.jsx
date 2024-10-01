import React from "react";


import AllCategories from "../../components/categories/allCategories";
import Products from "../../components/products";
import BestSellers from "../../components/bestSellers";
import DiscountProducts from "../../components/discountProducts";
import Hero from "../../components/hero";
import Deliveries from "../../components/deliveries";




const HomePage = () => {
  return (
    <div>

      <Hero/>
      <Deliveries/>
      <AllCategories />
      <Products/>
      <BestSellers/>
      <DiscountProducts/>

    </div>
  );
};

export default HomePage;
