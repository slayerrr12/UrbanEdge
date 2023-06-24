import React, { useState, useSyncExternalStore } from "react";

import { Routes, Route } from "react-router-dom";
import SignInAndSignUpPage from "./pages/signIn-signUp.page/SignInSignUp";
import "./App.css";
import { auth } from "./FireBase/firebase.utils";
import HomePage from "./pages/home/HomePage.component";
import ShopPage from "./pages/shop/ShopPage.component";
import Header from "./Components/Header/Header";

function App() {

  const [currentUser, setCurrentUser] = useState(null);





  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/login" element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
