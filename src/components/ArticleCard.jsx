import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({
  title,
  created_at,
  comment_count,
  votes,
  author,
  topic,
  id
}) => {
  return (
    <li>
      <Link to={`/articles/${id}`}>
        <p>
          {title} by '{author}'
        </p>
      </Link>
    </li>
  );
};

export default ArticleCard;
