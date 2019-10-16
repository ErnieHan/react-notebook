const initialState = {
  active: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        active: action.bool
      };

    default:
      return state;
  }
};
