import React, { useEffect, useState } from 'react';
import Container from '../../common/containerClass';
import SingleProductWithCart from '../singleProductWithCart';
import { useSelector } from 'react-redux';

const ProductsWithCart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get the customCart from Redux store
  const customCart = useSelector((state) => state.cart.customCart);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProducts(data);
    setLoading(false); // Set loading to false after products are fetched
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Group products by id and sum up the quantity
  const groupedCart = customCart.reduce((acc, item) => {
    const found = acc.find((prod) => prod.id === item.id);
    if (found) {
      found.count += item.count; // If product exists, increment the count
    } else {
      acc.push({ ...item }); // Otherwise, add it to the array
    }
    return acc;
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div className="flex flex-col gap-6">
        {groupedCart.length > 0 ? (
          groupedCart.map((item, index) => {
            const product = products.find((prod) => prod.id === item.id);
            return product ? (
              <SingleProductWithCart
                key={index}
                product={product}
                quantity={item.count} // Use the aggregated count
              />
            ) : null;
          })
        ) : (
          <div className="flex items-center justify-center">
            <h1 className="font-bold text-[60px]">Items Not Found</h1>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProductsWithCart;
