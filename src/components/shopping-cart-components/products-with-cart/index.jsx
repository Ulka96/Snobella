import React, { useEffect, useState } from 'react'
import Container from '../../common/containerClass'
import SingleProductWithCart from '../singleProductWithCart'
import { useSelector } from 'react-redux';

const ProductsWithCart = () => {

const [specProducts, setSpecProducts] = useState([])


const customCart = useSelector((state) => state.cart.customCart);

const fetchSpecificPproducts = async(id) => {

const response = await fetch(`http://localhost:3000/products?${id}`);
const data = await response.json();

setSpecProducts(data);

}

useEffect(() => {
fetchSpecificPproducts()
}, [])

  return (
    <Container>
      <div className="flex flex-col gap-6">
        {specProducts.length > 0 ? (
          customCart.map((single) => {
            const product = specProducts.find((prod) => prod.id === single.id); // Find corresponding product
            return (
              product && (
                <SingleProductWithCart
                  key={product.id}
                  product={product} // Pass product data as prop
                  count={single.count} // Pass product count from cart
                />
              )
            );
          })
        ) : (
          <p>No products in the cart</p>
        )}
      </div>
    </Container>
  );
}

export default ProductsWithCart