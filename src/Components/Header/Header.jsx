import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../FireBase/firebase.utils";

import "./Header.scss";

const Header = (props) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src="crown.svg" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {props.currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/login">
          SIGNIN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
