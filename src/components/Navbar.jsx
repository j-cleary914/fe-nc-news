import React from "react";
import { Link } from "@reach/router";
import styles from "./Navbar.module.css";
import UserDropdown from "./UserDropdown";

const Navbar = props => {
  return (
    <ul className={styles.navbarUl}>
      <Link to="/">
        <li className={styles.navbarLi}>
          <button name="home" className={styles.navbarButton}>
            Home
          </button>
        </li>
      </Link>
      <Link to="/articles/coding">
        <li className={styles.navbarLi}>
          <button name="coding" className={styles.navbarButton}>
            Coding
          </button>
        </li>
      </Link>
      <Link to="/articles/cooking">
        <li className={styles.navbarLi}>
          <button name="cooking" className={styles.navbarButton}>
            Cooking
          </button>
        </li>
      </Link>
      <Link to="/articles/football">
        <li className={styles.navbarLi}>
          <button name="football" className={styles.navbarButton}>
            Football
          </button>
        </li>
      </Link>
      <div className={styles.dropdown}>
        <UserDropdown
          user={props.user}
          userDropdownClicked={props.userDropdownClicked}
        />
      </div>
    </ul>
  );
};

export default Navbar;
