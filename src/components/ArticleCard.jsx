import React from "react";
import { Link } from "@reach/router";
import timeSince from "../utils";
import Voter from "./Voter";
import styles from "./ArticleCard.module.css";

const ArticleCard = ({
  title,
  created_at,
  comment_count,
  votes,
  author,
  topic,
  id
}) => {
  let timeSinceString = timeSince(new Date(created_at));
  return (
    <li className={styles.articleCard}>
      <Link to={`/articles/${id}`}>
        <p className={styles.articleTitle}>{title}</p>
      </Link>
      <p className={styles.articleInfo}>
        {comment_count} comments, submitted by{" "}
        <Link to={`/users/${author}`}>{author}</Link> {timeSinceString} to{" "}
        <Link to={`/articles/${topic}`}>{topic}</Link>
      </p>
      <Voter votes={votes} id={id} votingOn="article" />
    </li>
  );
};

export default ArticleCard;
