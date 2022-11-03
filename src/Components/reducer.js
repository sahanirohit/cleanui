export const initialState = {
  basket: [],
  user: null,
  login: false,
  register: false,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "handleLoginForm":
      initialState.login(!false);
      break;

    default:
      break;
  }
}

export default reducer;
