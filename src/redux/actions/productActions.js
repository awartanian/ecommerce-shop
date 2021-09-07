import * as api from "../../api/api";
import { ActionTypes } from "../action-types/actionTypes";

export const setProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: ActionTypes.SET_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const selectedProduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSelectedProduct(id);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const removeSelectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const filterProducts = (products, category) => {
  return {
    type: ActionTypes.FILTER_PRODUCT_BY_CATEGORY,
    payload: {
      products:
        category === "ALL"
          ? products
          : products.filter((prod) => prod.category === category),
      category: category,
    },
  };
};
