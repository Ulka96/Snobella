import React from 'react'
// Router
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/Home/page';

const App = () => {
  return (
    <>
      <main className="font-poppins">
        <Routes>
          <Route path='/' element={<HomePage/>} />

        </Routes>
      </main>
    </>
  );
}

export default App
