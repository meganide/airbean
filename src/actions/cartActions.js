function addProduct(product) {
  return {
    type: 'ADD_PRODUCT',
    payload: product,
  };
}

function deleteProduct(product) {
  return {
    type: 'DELETE_PRODUCT',
    payload: product,
  };
}

function clearCart() {
  return {
    type: 'CLEAR_CART',
  };
}

export { addProduct, deleteProduct, clearCart };
