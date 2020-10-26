import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/homepage";
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in&up/sign-in&up";

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route exact path="/signin" component={SignInAndSignUpPage} />
    </div>
  );
}

export default App;
