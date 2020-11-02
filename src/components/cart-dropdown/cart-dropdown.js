import React from "react";
import "./cart-dropdown.scss";

import CustomButton from "../custom-button/custom-button";

const Cart = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>checkout</CustomButton>
    </div>
  );
};

export default Cart;
