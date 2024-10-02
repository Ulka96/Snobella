import React from 'react'
// Router
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/Home/page';
import Products from './pages/Products/page'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import SubHeader from './components/layout/header/subHeader';
import MainHeader from './components/layout/header/mainHeader';
import TopFooter from './components/layout/footer/topFooter';
import MainFooter from './components/layout/footer/mainFooter';
import SubFooter from './components/layout/footer/subFooter';
import ShoppingCart from './pages/Shopping-Cart/page';
import SignUp from './pages/sign-up/page';
import SignIn from './pages/sign-in/page';


const App = () => {
  return (
    <>
      <SubHeader />
      <MainHeader />
      <main className="font-poppins">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </main>
      <TopFooter />
      <MainFooter />
      <SubFooter />
    </>
  );
}

export default App
