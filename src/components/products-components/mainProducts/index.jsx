import React, { useEffect, useState } from "react";
import Container from "../../common/containerClass/index";
import SingleProduct from "../../products/singleProduct";
import { useSelector } from "react-redux";

const MainProducts = ({ setCount }) => {
  const [mainProducts, setMainProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categoryId = useSelector((state) => state.filter.categoryId);
  const materialId = useSelector((state) => state.filter.materialId);

  const isSorted = useSelector((state) => state.filter.isSorted);
 const highToLowSort = useSelector((state) => state.filter.highToLowSort)


  // Fetch all products
  const fetchMainProducts = async () => {
    const response = await fetch(`http://localhost:3000/products`);
    const data = await response.json();

    setCount(data.length);
    setMainProducts(data);
  };

  useEffect(() => {
    fetchMainProducts();
  }, []);

  // Filter products
  useEffect(() => {
    let filtered = mainProducts;

    if (categoryId) {
      filtered = filtered.filter(
        (product) => product.categoryId === categoryId
      );
    }

    if (materialId) {
      filtered = filtered.filter(
        (product) => product.materialId === materialId
      );
    }

    if (isSorted) {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    }

    if (highToLowSort) {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }


    

    setFilteredProducts(filtered);
  }, [categoryId, materialId, mainProducts, isSorted, highToLowSort]);

  return (
    <Container>
      <div className="grid grid-cols-2 gap-[23px] w-[93%] ml-auto">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))
        ) : (
          <p>No products found for the selected category.</p>
        )}
      </div>
    </Container>
  );
};

export default MainProducts;
