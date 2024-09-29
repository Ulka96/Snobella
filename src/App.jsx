import React from 'react'
// Router
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/Home/page';
import Products from './pages/Products/page'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const App = () => {
  return (
    <>
      <main className="font-poppins">
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/products' element={<Products/>}/>
          <Route exact path="/products/featured-products" component={() => <Products type="featured-products" />} />

        </Routes>
      </main>
    </>
  );
}

export default App
