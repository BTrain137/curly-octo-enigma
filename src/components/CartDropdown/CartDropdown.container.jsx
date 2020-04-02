import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selector";
import CartDropdown from "./index";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// const CartDropdownContainer = withRouter(connect(mapStateToProps)(CartDropdown));

const CartDropdownContainer = compose(
  withRouter,
  connect(mapStateToProps)
)(CartDropdown)
export default CartDropdownContainer;
