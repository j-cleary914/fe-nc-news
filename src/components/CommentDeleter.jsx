import React from "react";
import styles from "./CommentCard.module.css";

const CommentDeleter = props => {
  return (
    <button
      className={styles.commentDeleter}
      onClick={() => {
        props.removeComment(props.id);
      }}
    >
      delete
    </button>
  );
};

export default CommentDeleter;
