import React, { Component } from "react";

class CommentCard extends Component {
  render() {
    return (
      <div className="commentCard">
        <p>
          votes: {this.props.votes}, created at: {this.props.created_at}
        </p>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default CommentCard;
