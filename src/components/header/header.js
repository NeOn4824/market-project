import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../miscellaneous/crown.svg";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-cointainer">
        <Logo className="logo" />
      </Link>
      <Link className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        <Link className="option" to="/shop">
          ABOUT
        </Link>
      </Link>
    </div>
  );
};

export default Header;
