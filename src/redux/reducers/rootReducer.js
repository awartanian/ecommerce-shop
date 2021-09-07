import { combineReducers } from "redux";
import { reviewReducer } from "./reviewReducer";
import { productReducer, selectedProductReducer } from "./productReducer";
import { sidebarReducer } from "./sidebarReducer";
import { cartReducer } from "./cartReducer";

const rootReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  reviews: reviewReducer,
  sidebar: sidebarReducer,
  cart: cartReducer,
});

export default rootReducers;
