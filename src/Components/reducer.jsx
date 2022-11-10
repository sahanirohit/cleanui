export const initialState = {
  data: 10,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "add":
      return {
        ...state,
        data: state.data + 1,
      };
    default:
      return state;
  }
};

export default reducer;
