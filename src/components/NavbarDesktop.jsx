import styles from "./NavbarDesktop.module.css";
import { Link } from "@reach/router";
import Dropdowntest from "./UserDropdown";

import React, { Component } from "react";

class NavbarDesktop extends Component {
  state = {
    isHidden: true
  };

  handleClick = () => {
    this.setState(currentState => {
      return { isHidden: !currentState.isHidden };
    });
  };

  render() {
    return (
      <div className={styles.navbar}>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/articles/coding">
          <p>Coding</p>
        </Link>
        <Link to="/articles/cooking">
          <p>Cooking</p>
        </Link>
        <Link to="/articles/football">
          <p>Football</p>
        </Link>
        <Dropdowntest
          user={this.props.user}
          userDropdownClicked={this.props.userDropdownClicked}
        />
      </div>
    );
  }
}

export default NavbarDesktop;
