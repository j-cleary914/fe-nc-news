import styles from "./Navbar2.module.css";
import React from "react";

const Dropdowntest = props => {
  return (
    <div className={styles.dropdown}>
      Select User:
      <button className={styles.dropbtn}>{props.user} ▼</button>
      <div class={styles.dropdownContent} onClick={props.userDropdownClicked}>
        <button name="weegembump" class={styles.button}>
          weegembump
        </button>
        <button name="haappyamy2016" class={styles.button}>
          haappyamy2016
        </button>
        <button name="jessjelly" class={styles.button}>
          jessjelly{" "}
        </button>
        <button name="grumpy19" class={styles.button}>
          grumpy19{" "}
        </button>
        <button name="tickle122" class={styles.button}>
          tickle122{" "}
        </button>
        <button name="cooljmessy" class={styles.button}>
          cooljmessy{" "}
        </button>
      </div>
    </div>
  );
};

export default Dropdowntest;
