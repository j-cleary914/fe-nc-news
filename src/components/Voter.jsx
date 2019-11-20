import React, { Component } from "react";
import * as api from "../api";

class Voter extends Component {
  state = {
    change: 0
  };

  handleClick = incrementBy => {
    this.setState(currentState => {
      let newChange = currentState.change;
      newChange = newChange + incrementBy;
      return { change: newChange };
    });
    if (this.props.votingOn === "comment") {
      api.patchCommentVotes(this.props.id, incrementBy).then(response => {
        //console.log(response.comment);
      });
    }
    if (this.props.votingOn === "article") {
      api.patchArticleVotes(this.props.id, incrementBy).then(response => {
        //console.log(response.article);
      });
    }
  };

  render() {
    console.log(this.props.votes);
    return (
      <div>
        <button onClick={() => this.handleClick(1)}>UP</button>
        <p>{this.props.votes + this.state.change}</p>
        <button onClick={() => this.handleClick(-1)}>DOWN</button>
      </div>
    );
  }
}

export default Voter;
