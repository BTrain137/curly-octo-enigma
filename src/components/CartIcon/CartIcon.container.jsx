import React from "react";
import { flowRight } from "lodash";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

import CartIcon from "./index";

const TOGGLE_CART_HIDDEN = gql`
  mutation toggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_ITEMS_COUNT = gql`
  {
    itemsCount @client
  }
`;

const CartIconContainer = ({ data: {itemsCount }, toggleCartHidden}) => (
  <CartIcon toggleCartHidden={toggleCartHidden} itemsCount={itemsCount} />
);

export default flowRight(
  graphql(GET_ITEMS_COUNT),
  graphql(TOGGLE_CART_HIDDEN, { name: "toggleCartHidden" })
)(CartIconContainer);
