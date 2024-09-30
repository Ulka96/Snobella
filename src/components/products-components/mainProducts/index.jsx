import React, { useEffect, useState } from 'react'

import Container from "../../common/containerClass/index"
import SingleProduct from '../../products/singleProduct'

import { useDispatch, useSelector } from 'react-redux';


const MainProducts = ({ setCount }) => {
  const [mainProducts, setMainProducts] = useState([]);

  //  const [filteredProducts, setFilteredProducts] = useState([]);

  //  const selectedCategories = useSelector(
  //    (state) => state.categories.selectedCategories
  //  );

  //  const filterProducts = () => {
  //    let products = mainProducts;

  //    if (selectedCategories.length > 0) {
  //      products = products.filter((product) =>
  //        selectedCategories.includes(product.category)
  //      );
  //    }

  //    setFilteredProducts(products);
  //  };


  const fetchMainProducts = async () => {
    const response = await fetch(`http://localhost:3000/products`);
    const data = await response.json();

    setCount(data.length);
    setMainProducts(data);

  };

  useEffect(() => {
    fetchMainProducts();
    // setFilteredProducts(data);

  }, []);

  //  useEffect(() => {
  //    filterProducts();
  //  }, [selectedCategories]);

  return (
    // <div>

    <Container>
      <div className="grid grid-cols-2 gap-[23px] w-[93%] ml-auto">
        {mainProducts &&
          mainProducts.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
      </div>
    </Container>

    // </div>
  );
};

export default MainProducts