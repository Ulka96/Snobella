import React from "react";
import SubHeader from "../../components/layout/header/subHeader";
import MainHeader from "../../components/layout/header/mainHeader";

import MainFooter from "../../components/layout/footer/mainFooter";
import SubFooter from "../../components/layout/footer/subFooter";
import TopFooter from "../../components/layout/footer/topFooter";
import AllCategories from "../../components/categories/allCategories";
import Products from "../../components/products";
import BestSellers from "../../components/bestSellers";
import DiscountProducts from "../../components/discountProducts";
import Hero from "../../components/hero";
import Deliveries from "../../components/deliveries";




const HomePage = () => {
  return (
    <div>
      <SubHeader />
      <MainHeader />

      <Hero/>
      <Deliveries/>

      <AllCategories />
      <Products/>
      <BestSellers/>
      <DiscountProducts/>

      <TopFooter />
      <MainFooter />
      <SubFooter />
    </div>
  );
};

export default HomePage;
