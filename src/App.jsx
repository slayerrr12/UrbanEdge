import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/home/HomePage.component";
import ShopPage from "./pages/shop/ShopPage.component";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
