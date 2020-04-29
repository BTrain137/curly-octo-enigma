import React, { useContext, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";

import { selectCartHidden } from "../../redux/cart/cart.selector";
import CurrentUserContext from "../../context/current-user/current-user.context";
import CartContext from "../../context/cart/cart.context";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Header.styles.scss";

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <nav className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartContext.Provider
          value={{
            hidden,
            toggleHidden,
          }}
        >
          <CartIcon />
        </CartContext.Provider>
      </nav>
      {hidden ? null : <CartDropdown />}
    </header>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
