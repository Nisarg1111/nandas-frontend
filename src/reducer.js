export const initialState = {
  userLoggedIn: sessionStorage.getItem("token") ? true : false,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_LOGIN_STATUS":
      return {
        ...state,
        userLoggedIn: action.status,
      };
    default:
      return state;
  }
}

export default reducer;
