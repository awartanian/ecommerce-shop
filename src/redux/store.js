import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const middleWare = applyMiddleware(thunk);

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(middleWare)
);

export default store;
