import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { showSidebar } from "../../../redux/actions/sidebarAction";

function Nav() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(showSidebar());
  };

  return (
    <div className="Nav-wrapper">
      <ul className="Nav-parent">
        <li className="Nav-item">
          <NavLink activeClassName="Active-page" to="/home">
            home
          </NavLink>
        </li>
        <li className="Nav-item">
          <NavLink activeClassName="Active-page" to="/productlisting">
            shop
          </NavLink>
          <GiHamburgerMenu onClick={handleClick} className="Nav-menu" />
        </li>
        <li className="Nav-item">
          <NavLink activeClassName="Active-page" to="/shipping">
            shipping
          </NavLink>
        </li>
        <li className="Nav-item">
          <NavLink activeClassName="Active-page" to="/vouchers">
            vouchers
          </NavLink>
        </li>
        <li className="Nav-item">
          <NavLink activeClassName="Active-page" to="/ourteam">
            our team
          </NavLink>
        </li>
        <li className="Nav-item">
          <NavLink activeClassName="Active-page" to="/contact">
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
