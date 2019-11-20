import React from "react";

const CommentDeleter = props => {
  return <button onClick={() => {props.removeComment(props.id)}}>delete me</button>;
};

export default CommentDeleter;
