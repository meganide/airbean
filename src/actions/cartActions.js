function addProduct(product) {
  return {
    type: 'ADD-PRODUCT',
    payload: product,
  };
}

function deleteProduct(product) {
  return {
    type: 'DELETE-PRODUCT',
    payload: product,
  };
}

function clearCart() {
  return {
    type: 'CLEAR-CART',
  };
}

export { addProduct, deleteProduct, clearCart };
