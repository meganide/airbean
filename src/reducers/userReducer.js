const INITIAL_STATE = '';

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'CHANGE-NAME':
      return action.payload;

    default:
      return state;
  }
}

export default userReducer;
