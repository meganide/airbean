const INITAL_STATE = [];

function cartReducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'ADD-PRODUCT': {
      return [
        ...state,
        action.payload
      ]
    }

    default:
      return state;
  }
}

export { cartReducer };