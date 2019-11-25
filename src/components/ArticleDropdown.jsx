import React from "react";
import styles from "./Article.module.css";

const ArticleDropdown = props => {
  return (
    <div className={styles.dropdown}>
      Sort articles by
      <button className={styles.dropbtn}>{props.sort_by} ▼</button>
      <div className={styles.dropdownContent} onClick={props.dropdownClicked}>
        <button name="Votes" className={styles.button}>
          Votes
        </button>
        <button name="Votes asc" className={styles.button}>
          Votes asc
        </button>
        <button name="Old" className={styles.button}>
          Old
        </button>
        <button name="New" className={styles.button}>
          New
        </button>
        <button name="Most comments" className={styles.button}>
          Most comments
        </button>
        <button name="Least comments" className={styles.button}>
          Least comments
        </button>
      </div>
    </div>
  );
};

export default ArticleDropdown;
