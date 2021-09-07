import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { hideSidebar } from "../../../redux/actions/sidebarAction";

function Sidebar() {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(hideSidebar());
  };

  return (
    <div className="Sidebar" id={sidebar ? "show-sidebar" : "hide-sidebar"}>
      <ul className="Sidebar-parent">
        <li className="Sidebar-item">
          <NavLink activeClassName="Active-page" to="/home">
            home
          </NavLink>
        </li>
        <li className="Sidebar-item">
          <NavLink activeClassName="Active-page" to="/productlisting">
            shop
          </NavLink>
        </li>
        <li className="Sidebar-item">
          <NavLink activeClassName="Active-page" to="/shipping">
            shipping
          </NavLink>
        </li>
        <li className="Sidebar-item">
          <NavLink activeClassName="Active-page" to="/returns">
            returns
          </NavLink>
        </li>
        <li className="Sidebar-item">
          <NavLink activeClassName="Active-page" to="/vouchers">
            vouchers
          </NavLink>
        </li>
        <li className="Sidebar-item">
          <NavLink activeClassName="Active-page" to="/terms">
            t&c
          </NavLink>
        </li>
        <li className="Sidebar-item">
          <NavLink activeClassName="Active-page" to="/privacy">
            privacy policy
          </NavLink>
        </li>
        <li className="Sidebar-item">
          <NavLink activeClassName="Active-page" to="/ourteam">
            our team
          </NavLink>
        </li>
        <li className="Sidebar-item">
          <NavLink activeClassName="Active-page" to="/contact">
            contact
          </NavLink>
        </li>
        <div className="Sidebar-X">
          <ImCancelCircle onClick={() => handleClick()} />
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
