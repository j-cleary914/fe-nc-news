import React from "react";
import UserDropdown from "./UserDropdown";
import Navbar from "./Navbar";

const Header = props => {
  return (
    <div className="Header">
      <h1>NC News</h1>
      <UserDropdown
        user={props.user}
        userDropdownClicked={props.userDropdownClicked}
      />
      <Navbar />
    </div>
  );
};

export default Header;
