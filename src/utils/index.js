// ** Exists
// ** If Exists =>
// ** Check if exits
// ** Mapping Products Cart

// ** Not Exists =>

export const addItemToCart = (cartItem, shoppingCartItems = []) => {
  const exits = shoppingCartItems.find(i => i.id === cartItem.id);

  if (exits) {
    return shoppingCartItems.map(product =>
      product.id === cartItem.id ? { ...product, quantity: product.quantity + 1 } : product
    );
  }

  return [...shoppingCartItems, { ...cartItem, quantity: 1 }];
};
