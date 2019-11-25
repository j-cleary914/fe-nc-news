import styles from "./NavbarDesktop.module.css";
import React from "react";

const UserDropdown = props => {
  return (
    <div className={styles.dropdown}>
      Select User:
      <button className={styles.dropbtn}>{props.user} ▼</button>
      <div class={styles.dropdownContent} onClick={props.userDropdownClicked}>
        <button name="weegembump" class={styles.button}>
          weegembump
        </button>
        <button name="haappyamy2016" className={styles.button}>
          haappyamy2016
        </button>
        <button name="jessjelly" className={styles.button}>
          jessjelly{" "}
        </button>
        <button name="grumpy19" className={styles.button}>
          grumpy19{" "}
        </button>
        <button name="tickle122" className={styles.button}>
          tickle122{" "}
        </button>
        <button name="cooljmessy" className={styles.button}>
          cooljmessy{" "}
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
