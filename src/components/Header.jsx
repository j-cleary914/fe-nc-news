import React from "react";
import UserDropdown from "./UserDropdown";
import Navbar from "./Navbar";
import styles from "./Header.module.css";

const Header = props => {
  return (
    <div className={styles.Header}>
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
