import React, { useState } from "react";;
import Heading from "../../components/products-components/heading";
import FilterListing from "../../components/products-components/filterListing";
import MainProducts from "../../components/products-components/mainProducts";

const ProductsPage = () => {
  const [count, setCount] = useState(6);

  const countHandle = (count) => {
    setCount();
  };


  return (
    <div>

      <Heading count={count} />
      <div className="flex flex-row max-w-[1128px] mx-auto mt-8">
        <FilterListing />
        <MainProducts setCount={setCount} />
      </div>

    </div>
  );
};

export default ProductsPage;
