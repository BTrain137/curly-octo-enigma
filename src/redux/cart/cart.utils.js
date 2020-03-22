export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const hasItemInCart = cartItems.find(
    cartItem => cartItem.id === cartItemsToAdd.id
  );

  if (hasItemInCart) {
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
};
