import React, { Component } from "react";
import styles from "./NavbarMobile.module.css";
import { Link } from "@reach/router";
import UserDropdown from "./UserDropdown";

class NavbarMobile extends Component {
  state = { isHidden: true };
  handleClick = () => {
    this.setState(currentState => {
      return { isHidden: !currentState.isHidden };
    });
  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.icon}>
          <i
            class="fas fa-bars fa-3x"
            grid-area="dropdown"
            color="white"
            onClick={this.handleClick}
          ></i>
        </div>

        <UserDropdown
          className={styles.dropdown}
          user={this.props.user}
          userDropdownClicked={this.props.userDropdownClicked}
        />

        {!this.state.isHidden && (
          <div className={styles.navbar}>
            <Link to="/" onClick={this.handleClick}>
              <p>Home</p>
            </Link>
            <Link to="/articles/coding" onClick={this.handleClick}>
              <p>Coding</p>
            </Link>
            <Link to="/articles/cooking" onClick={this.handleClick}>
              <p>Cooking</p>
            </Link>
            <Link to="/articles/football" onClick={this.handleClick}>
              <p>Football</p>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default NavbarMobile;
