import React, { useEffect, useState } from "react";
import Container from "../../common/containerClass/index";
import SingleProduct from "../../products/singleProduct";
import { useSelector } from "react-redux";

const MainProducts = ({ setCount }) => {
  const [mainProducts, setMainProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categoryId = useSelector((state) => state.filter.categoryId);
  const materialId = useSelector((state) => state.filter.materialId);
  const colorId = useSelector((state) => state.filter.colorId)
  const lowToHighSort = useSelector((state) => state.filter.lowToHighSort);
 const highToLowSort = useSelector((state) => state.filter.highToLowSort)
 const featured = useSelector((state) => state.filter.featured)
 const discounted = useSelector((state) => state.filter.discount)
 const bestSeller = useSelector((state) => state.filter.bestSeller)

 const lowPrice = useSelector((state) => state.filter.lowPrice)
 const highPrice = useSelector((state) => state.filter.highPrice)



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

    if (colorId) {
      filtered = filtered.filter(
        (product) => product.colorId === colorId
      );
    }

    if (lowToHighSort) {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    }

    if (highToLowSort) {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    if(featured) {
      filtered = filtered.filter((product) => product["featured-products"])
    }

    if(discounted) {
      filtered = filtered.filter((product) => product["discount-products"])
    }

    if(bestSeller) {
      filtered = filtered.filter((product) => product["best-sellers"])
    }
    
     // Filter by price range
     if (lowPrice || highPrice) {
      filtered = filtered.filter((product) => {
        const productPrice = product.price;
        const filteredPrice =
          (lowPrice ? productPrice >= lowPrice : true) &&
          (highPrice ? productPrice <= highPrice : true);
        return filteredPrice;
      });
    }
   
    

    setFilteredProducts(filtered);
  }, [categoryId, materialId, colorId, mainProducts, featured,discounted, bestSeller, lowToHighSort, highToLowSort, lowPrice, highPrice]);



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
