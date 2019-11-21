import React, { Component } from "react";
import * as api from "../api";

class Voter extends Component {
  state = {
    change: 0,
    upClicked: false,
    downClicked: false
  };

  handleClick = incrementBy => {
    if (incrementBy === 1 && this.state.upClicked === false) {
      this.setState({ change: 1, upClicked: true, downClicked: false });
      let incrementBy = 1;
      if (this.state.downClicked) {
        incrementBy = 2;
      }
      if (this.props.votingOn === "article" && this.state.upClicked === false) {
        api.patchArticleVotes(this.props.id, incrementBy).then(response => {
          console.log(response.article.votes);
        });
      }
      if (this.props.votingOn === "comment" && this.state.upClicked === false) {
        api.patchCommentVotes(this.props.id, incrementBy).then(response => {
          console.log(response.comment.votes);
        });
      }
    } else if (incrementBy === 1 && this.state.upClicked === true) {
      this.setState({ change: 0, upClicked: false });
      if (this.props.votingOn === "article" && this.state.upClicked === true) {
        api.patchArticleVotes(this.props.id, -1).then(response => {
          console.log(response.article.votes);
        });
      }
      if (this.props.votingOn === "comment" && this.state.upClicked === true) {
        api.patchCommentVotes(this.props.id, -1).then(response => {
          console.log(response.comment.votes);
        });
      }
    }

    if (incrementBy === -1 && this.state.downClicked === false) {
      this.setState({ change: -1, downClicked: true, upClicked: false });
      let incrementBy = -1;
      if (this.state.upClicked) {
        incrementBy = -2;
      }
      if (
        this.props.votingOn === "article" &&
        this.state.downClicked === false
      ) {
        api.patchArticleVotes(this.props.id, incrementBy).then(response => {
          console.log(response.article.votes);
        });
      }
      if (
        this.props.votingOn === "comment" &&
        this.state.downClicked === false
      ) {
        api.patchCommentVotes(this.props.id, incrementBy).then(response => {
          console.log(response.comment.votes);
        });
      }
    } else if (incrementBy === -1 && this.state.downClicked === true) {
      this.setState({ change: 0, downClicked: false });
      if (
        this.props.votingOn === "article" &&
        this.state.downClicked === true
      ) {
        api.patchArticleVotes(this.props.id, 1).then(response => {
          console.log(response.article.votes);
        });
      }
      if (
        this.props.votingOn === "comment" &&
        this.state.downClicked === true
      ) {
        api.patchCommentVotes(this.props.id, 1).then(response => {
          console.log(response.comment.votes);
        });
      }
    }
  };

  render() {
    // console.log("rendering with ", this.state);
    let upButtonClass = "voteButton";
    let downButtonClass = "voteButton";
    if (this.state.upClicked === true) {
      upButtonClass = "upvoteButtonClicked";
    }
    if (this.state.downClicked === true) {
      downButtonClass = "downvoteButtonClicked";
    }

    return (
      <div>
        <button className={upButtonClass} onClick={() => this.handleClick(1)}>
          ▲
        </button>
        <p>{this.props.votes + this.state.change}</p>
        <button
          className={downButtonClass}
          onClick={() => this.handleClick(-1)}
        >
          ▼
        </button>
      </div>
    );
  }
}

export default Voter;
