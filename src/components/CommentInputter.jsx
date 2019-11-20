import React, { Component } from "react";


class CommentInputter extends Component {
  state = {
    input: "feel free to change me"
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.state.input);
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div>
        <textarea
          rows="4"
          cols="50"
          value={this.state.input}
          onChange={this.handleChange}
        ></textarea>
        <button onClick={this.handleSubmit}> Submit Comment</button>
      </div>
    );
  }
}

export default CommentInputter;