import React from "react";
import { useHistory } from "react-router-dom";
import "./Cart.scss";

const MessageBox = () => {
  let history = useHistory();
  const backToShop = () => {
    history.push(`/ProductListing`);
  };
  return (
    <div className="MessageBox">
      <h3>Your shopping cart is empty.</h3>
      <button onClick={backToShop}>Back to shop</button>
    </div>
  );
};

export default MessageBox;
