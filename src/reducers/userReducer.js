const INITIAL_STATE = {
  name: '',
  orderNr: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE-NAME':
      return { ...state, name: action.payload };

    case 'CHANGE-ORDERNR':
      return { ...state, orderNr: action.payload };

    default:
      return state;
  }
}

export default userReducer;
