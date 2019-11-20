import React from "react";
import { Link } from "@reach/router";
import timeSince from "../utils";

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
    <li className="articleCard">
      <Link to={`/articles/${id}`}>
        <p>{title}</p>
        <p>
          votes: {votes}, {comment_count} comments, submitted by{" "}
          <Link to={`/users/${author}`}>{author}</Link> {timeSinceString} to{" "}
          <Link to={`/articles/${topic}`}>{topic}</Link>
        </p>
      </Link>
    </li>
  );
};

export default ArticleCard;
