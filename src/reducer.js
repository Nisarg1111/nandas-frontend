export const initialState = {
  userLoggedIn:
    sessionStorage.getItem("token") || localStorage.getItem("token")
      ? true
      : false,
  showProfileOptions: false,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_LOGIN_STATUS":
      return {
        ...state,
        userLoggedIn: action.status,
      };
    case "PROFILE_OPTIONS_VIEW":
      return {
        ...state,
        showProfileOptions: action.status,
      };
    default:
      return state;
  }
}

export default reducer;
