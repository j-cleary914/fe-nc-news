import styles from "./Navbar2.module.css";
import { Link } from "@reach/router";
import Dropdowntest from "./UserDropdown";

import React, { Component } from "react";

class Navbar2 extends Component {
  state = {
    isHidden: true
  };

  handleClick = () => {
    console.log("clicked!", this.state.isHidden);
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

export default Navbar2;
