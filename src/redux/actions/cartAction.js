import axios from "axios";
import { ActionTypes } from "../action-types/actionTypes";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${productId}`
  );

  dispatch({
    type: ActionTypes.ADD_TO_CART,
    payload: {
      name: data.title,
      image: data.image,
      price: data.price,
      description: data.description,
      product: data.id,
      gategory: data.category,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: ActionTypes.REMOVE_FROM_CART,
    payload: productId,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
