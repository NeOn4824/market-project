import React from "react";
import "./App.css";
import HomePage from "./pages/homePage/homepage";
import { Route } from "react-router-dom";
import ShopPAge from "./pages/shop/shop";

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPAge} />
    </div>
  );
}

export default App;
