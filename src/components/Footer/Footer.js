import React from "react";
import "./Footer.scss";
import { RiVisaLine } from "react-icons/ri";
import { RiMastercardLine } from "react-icons/ri";
import { FaCcPaypal } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-section-1">
        <span className="Footer-title">newsletter</span>
        <div className="Input-container">
          <input type="text" placeholder="Enter your email address here ..." />
          <RiSendPlaneFill className="Footer-input-icon" />
        </div>
      </div>
      <div className="Footer-section-2">
        <span className="Footer-title">CUSTOMER SERVICE</span>
        <ul className="Footer-link-parent">
          <NavLink to="/shipping">Shipping</NavLink>
          <NavLink to="/returns">returns</NavLink>
          <NavLink to="/vouchers">vouchers</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </ul>
      </div>
      <div className="Footer-section-3">
        <span className="Footer-title">about arhera</span>
        <ul className="Footer-link-parent">
          <NavLink to="/ourteam">our team</NavLink>
          <NavLink to="/terms">terms and conditions</NavLink>
          <NavLink to="/privacy">privacy policy</NavLink>
        </ul>
      </div>
      <div className="Footer-section-4">
        <div className="sec-4-cont">
          <span className="Footer-title">payment methods</span>
          <div className="Footer-logo-cont">
            <RiVisaLine />
            <RiMastercardLine />
            <FaCcPaypal />
          </div>
        </div>
        <div className="sec-4-cont">
          <span className="Footer-title">you can also find us on</span>
          <div className="Footer-logo-cont Footer-logo-cont-contact">
            <RiFacebookFill />
            <FaInstagram />
            <AiFillAndroid />
            <AiFillApple />
          </div>
        </div>
        <div className="sec-4-cont">
          <span className="Footer-title">delivery partners</span>
          <div className="Footer-logo-cont">
            <i className="fab fa-dhl"></i>
            <i className="fab fa-ups"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
