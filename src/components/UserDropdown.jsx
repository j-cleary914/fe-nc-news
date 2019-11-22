import React from "react";
import styles from "./Navbar.module.css";

const UserDropdown = props => {
  return (
    <div className={styles.dropdown}>
      Select User:
      <button className="dropbtn">{props.user} ▼</button>
      <div
        id="myDropdown"
        className={styles.dropdownContent}
        onClick={props.userDropdownClicked}
      >
        <button name="weegembump">weegembump</button>
        <button name="haappyamy2016">haappyamy2016</button>
        <button name="jessjelly">jessjelly </button>
        <button name="grumpy19">grumpy19 </button>
        <button name="tickle122">tickle122 </button>
        <button name="cooljmessy">cooljmessy </button>
      </div>
    </div>
  );
};

export default UserDropdown;
