import { ActionTypes } from "../action-types/actionTypes";

const initialState = {
  products: [],
  filteredItems: [],
  category: "",
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload, filteredItems: payload };
    case ActionTypes.FILTER_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        filteredItems: payload.products,
        category: payload.category,
      };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
