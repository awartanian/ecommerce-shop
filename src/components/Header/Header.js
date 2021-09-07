import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";
import Sidebar from "./Nav/Sidebar";

const Header = () => {
  return (
    <div>
      <Logo />
      <Nav />
      <Sidebar />
    </div>
  );
};

export default Header;
