export const initialState = {
  userLoggedIn:
    sessionStorage.getItem("token") || localStorage.getItem("token")
      ? true
      : false,
  showProfileOptions: false,
  userCart: [],
  cartTotal: "",
  userAddresses: [],
  favorites: [],
};

function reducer(state, action) {
  // console.log(action);
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
    case "SET_CART_ITEMS":
      return {
        ...state,
        userCart: action.data,
      };
    case "UPDATE_ITEM_QUANTITY":
      return {
        ...state,
        userCart: state.userCart.map((item) => {
          if (item.product_details.product_id === action.id) {
            item.quantity = action.qty;
            item.sub_total = item?.product_details?.price * action.qty;
          }
          return item;
        }),
      };
    case "SET_CART_TOTAL":
      return {
        ...state,
        cartTotal: action.data,
      };
    case "SET_USER_ADDRESSES":
      return {
        ...state,
        userAddresses: action.addresses,
      };
    case "DELETE_USER_ADDRESS":
      return {
        ...state,
        userAddresses: state.userAddresses.filter(
          (address) => address.id !== action.id
        ),
      };
    case "SET_FAVORITE_LIST":
      return { ...state, favorites: action.data };
    case "ADD_TO_FAVORITES_LIST":
      return { ...state, favorites: [...state.favorites, action.item] };
    case "REMOVE_FROM_FAVORITES_LIST":
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.item.id),
      };
    default:
      return state;
  }
}

export default reducer;
