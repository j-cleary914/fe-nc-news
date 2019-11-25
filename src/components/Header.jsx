import React from "react";
import NavbarDesktop from "./NavbarDesktop";
import styles from "./Header.module.css";
import NavbarMobile from "./NavbarMobile";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <div className={styles.Header}>
      <Link to="/">
        <h1>NC News</h1>
      </Link>

      <NavbarDesktop
        user={props.user}
        userDropdownClicked={props.userDropdownClicked}
      />
      <NavbarMobile
        user={props.user}
        userDropdownClicked={props.userDropdownClicked}
      />
    </div>
  );
};

export default Header;
