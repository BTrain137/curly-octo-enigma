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
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
};

export const getItemCount = (cartItems) => {
  return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
}
