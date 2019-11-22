import React from "react";
import timeSince from "../utils";
import { Link } from "@reach/router";
import CommentDeleter from "./CommentDeleter";
import Voter from "./Voter";
import styles from "./CommentCard.module.css";

const CommentCard = props => {
  let timeSinceString = timeSince(new Date(props.created_at));

  return (
    <div className={styles.commentCard}>
      <p className={styles.commentBody}>{props.body}</p>
      <p className={styles.commentInfo}>
        submitted {timeSinceString} by{" "}
        <Link to={`/users/${props.author}`}>{props.author}</Link> in{" "}
        <Link to={`/articles/${props.topic}`}>{props.topic}</Link>
      </p>
      <Voter votes={props.votes} id={props.comment_id} votingOn="comment" />
      {props.user === props.author && (
        <CommentDeleter
          user={props.user}
          author={props.author}
          removeComment={props.removeComment}
          id={props.comment_id}
        />
      )}
    </div>
  );
};

export default CommentCard;
