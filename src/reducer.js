export const initialState = {
  userLoggedIn:
    sessionStorage.getItem("token") || localStorage.getItem("token")
      ? true
      : false,
  showProfileOptions: false,
  userCart: [],
  cartTotal: "",
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
          console.log(item);
          return item;
        }),
      };
    // case "DELETE_FROM_CART":
    //   const deletedItem = state.userCart.find(
    //     (item) => item.product_details.product_id === action.data
    //   );
    //   return {
    //     ...state,
    //     userCart: state.userCart.filter(
    //       (item) => item?.product_details?.product_id !== action.data
    //     ),
    //     cartTotal: state.cartTotal - deletedItem.sub_total,
    //   };
    case "SET_CART_TOTAL":
      return {
        ...state,
        cartTotal: action.data,
      };
    default:
      return state;
  }
}

export default reducer;
