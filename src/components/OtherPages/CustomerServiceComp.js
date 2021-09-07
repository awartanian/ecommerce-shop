import React from "react";
import "./CustomerServiceComp.scss";

function CustomerServiceComp() {
  return (
    <div className="Customer-Service-card">
      <h4>Can i help you?</h4>
      <p>Please feel free to contact me if you have any further questions.</p>
      <img
        className="image"
        src="http://adamlowecreative.com/wp-content/uploads/2017/02/Handsome-Man-White-Background-600x600.jpg"
        alt=""
      />
      <span className="title">fahim ahmadi</span>
      <span className="role">Vice President of Customer Service</span>
      <span className="email">service@arhera.com</span>
      <span className="title-2">Service phone</span>
      <span className="phone">+49 (0) 89 / 111 22 33 44</span>
    </div>
  );
}

export default CustomerServiceComp;
