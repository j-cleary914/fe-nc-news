import React, { Component } from "react";
import timeSince from "../utils";
import { Link } from "@reach/router";
import CommentDeleter from "./CommentDeleter";
import Voter from "./Voter";

class CommentCard extends Component {
  render() {
    let timeSinceString = timeSince(new Date(this.props.created_at));
    return (
      <div className="commentCard">
        <p>{this.props.body}</p>
        <p>
          submitted {timeSinceString} by{" "}
          <Link to={`/users/${this.props.author}`}>{this.props.author}</Link> in
          (topic here)
        </p>
        <Voter
          votes={this.props.votes}
          id={this.props.comment_id}
          votingOn="comment"
        />
        {this.props.user === this.props.author && (
          <CommentDeleter
            user={this.props.user}
            author={this.props.author}
            removeComment={this.props.removeComment}
            id={this.props.comment_id}
          />
        )}
      </div>
    );
  }
}

export default CommentCard;
