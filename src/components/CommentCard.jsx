import React, { Component } from "react";
import timeSince from "../utils";
import { Link } from "@reach/router";

class CommentCard extends Component {
  render() {
    let timeSinceString = timeSince(new Date(this.props.created_at));
    return (
      <div className="commentCard">
        <p>{this.props.body}</p>
        <p>
          votes: {this.props.votes}, submitted {timeSinceString} by{" "}
          <Link to={`/users/${this.props.author}`}>{this.props.author}</Link> in
          (topic here)
        </p>
      </div>
    );
  }
}

export default CommentCard;
