import React, { Component } from "react";
import styles from "./Navbartest.module.css";
import { Link } from "@reach/router";
import Dropdowntest from "./UserDropdown";

class Navbartest extends Component {
  state = { isHidden: true };
  handleClick = () => {
    console.log("clicked!", this.state.isHidden);
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

        <Dropdowntest
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

export default Navbartest;
