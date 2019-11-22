import React, { Component } from "react";

class CommentInputter extends Component {
  state = {
    input: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.input === "") {
      alert("You cannot post an empty comment!");
    } else {
      this.props.addComment(this.state.input);
      this.setState({ input: "" });
    }
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <form>
        <textarea
          placeholder="what's on your mind?"
          required
          className="textInputter"
          value={this.state.input}
          onChange={this.handleChange}
        ></textarea>
        <button onClick={this.handleSubmit}> Submit Comment</button>
      </form>
    );
  }
}

export default CommentInputter;
