import React, { Component } from "react";
import timeSince from "../utils";
import { Link } from "@reach/router";
import CommentDeleter from "./CommentDeleter";
import Voter from "./Voter";
import styles from "./CommentCard.module.css";

class CommentCard extends Component {
  render() {
    let timeSinceString = timeSince(new Date(this.props.created_at));
    return (
      <div className={styles.commentCard}>
        <p className={styles.commentBody}>{this.props.body}</p>
        <p className={styles.commentInfo}>
          submitted {timeSinceString} by{" "}
          <Link to={`/users/${this.props.author}`}>{this.props.author}</Link> in{" "}
          <Link to={`/articles/${this.props.topic}`}>{this.props.topic}</Link>
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
