import React from "react";
import Navbar2 from "./Navbar2";
import styles from "./Header.module.css";
import Navbartest from "./Navbartest";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <div className={styles.Header}>
      <Link to="/">
        <h1>NC News</h1>
      </Link>

      <Navbar2
        user={props.user}
        userDropdownClicked={props.userDropdownClicked}
      />
      <Navbartest
        user={props.user}
        userDropdownClicked={props.userDropdownClicked}
      />
    </div>
  );
};

export default Header;
