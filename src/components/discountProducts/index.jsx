import React, { useEffect, useState } from "react";
import Container from "../common/containerClass";

import chevronleft from "../../assets/home/icons/chevronleft.png";
import SingleDiscount from "./singleDiscount";


const DiscountProducts = () => {
  const [discountproducts, setDiscountproducts] = useState([]);
  // const sliderRef = useRef(null);

  const fetchDiscountProducts = async () => {
    const response = await fetch("http://localhost:3000/products?discount-products=true");
    const data = await response.json();
    setDiscountproducts(data);
  };

  useEffect(() => {
    fetchDiscountProducts();
  }, []);

  return (
    <div>
      <Container>
        <div className="mt-24 ">
          <div className="mb-11 flex flex-row justify-between pt-[72px]">
            <h1 className="text-[32px] font-bold">Discount Products</h1>

            <div className="flex flex-row gap-2">
              <p>View all products</p>
              <button className="w-5 h-5">
                <img src={chevronleft} alt="chevronleft" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 auto-rows-auto gap-6 ">
            {discountproducts &&
              discountproducts.map((discountproduct) => (
                <SingleDiscount key={discountproduct.id} discountproduct={discountproduct} />
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DiscountProducts;
