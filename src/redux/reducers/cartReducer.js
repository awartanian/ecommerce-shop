import { ActionTypes } from "../action-types/actionTypes";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.name === item.name);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.name === existItem.name ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
