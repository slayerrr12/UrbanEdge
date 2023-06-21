import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/home/HomePage.component";
import ShopPage from "./pages/shop/ShopPage.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
