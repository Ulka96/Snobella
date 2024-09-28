import React, { useEffect, useState } from "react";
import Container from "../common/containerClass";

import chevronleft from "../../assets/home/icons/chevronleft.png";
import SingleSeller from "./singleSeller";

const BestSellers = () => {
  const [bestSellers, setbestSellers] = useState([]);
  // const sliderRef = useRef(null);

  const fetchSellers = async () => {
    const response = await fetch("http://localhost:3000/best-sellers");
    const data = await response.json();
    setbestSellers(data);
  };

  useEffect(() => {
    fetchSellers();
  }, []);


  return (
    <div className="bg-[#FFF7F7] ">
      <Container>
        <div className="mt-24 ">
          <div className="mb-11 flex flex-row justify-between pt-[72px]">
            <h1 className="text-[32px] font-bold">Bestseller</h1>

            <div className="flex flex-row gap-2">
              <p>View all products</p>
              <button className="w-5 h-5">
                <img src={chevronleft} alt="chevronleft" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 auto-rows-auto gap-6 ">
            {bestSellers &&
              bestSellers.map((bestSeller) => (
                <SingleSeller bestSeller={bestSeller} />
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BestSellers;
