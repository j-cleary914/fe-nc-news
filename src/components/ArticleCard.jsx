import React from "react";
import { Link } from "@reach/router";
import timeSince from "../utils";
import Voter from "./Voter";

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
      </Link>
      <p>
        votes: {votes}, {comment_count} comments, submitted by{" "}
        <Link to={`/users/${author}`}>{author}</Link> {timeSinceString} to{" "}
        <Link to={`/articles/${topic}`}>{topic}</Link>
      </p>
      <Voter
        className="articleVoter"
        votes={votes}
        id={id}
        votingOn="article"
      />
    </li>
  );
};

export default ArticleCard;
