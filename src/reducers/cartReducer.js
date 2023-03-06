const INITIAL_STATE = [];

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const productInState = state.find((product) => product.id === action.payload.id);
      if (productInState) {
        const updatedState = state.map((product) => {
          return product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product;
        });
        return updatedState;
      }
      return [...state, action.payload];
    }

    case 'DELETE_PRODUCT': {
      if (action.payload.quantity === 1) {
        const deletedProduct = state.filter((product) => {
          return product.id !== action.payload.id;
        });
        return deletedProduct;
      }

      const updatedState = state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });
      return updatedState;
    }

    case 'CLEAR_CART': {
      return [];
    }
    
    default:
      return state;
  }
}

export { cartReducer };
