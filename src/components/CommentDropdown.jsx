import React, { Component } from "react";

class CommentDropdown extends Component {
  state = {
    sort_by: "New"
  };

  dropdownClicked = e => {
    e.preventDefault();
    console.log("dropdown clicked!");
    console.log(e.target.name);
    this.setState({ sort_by: e.target.name });
    let id = this.props.article_id;
    let sort_by = "created_at";
    let order = "desc";
    if (e.target.name === "Old") {
      order = "asc";
    } else if (e.target.name === "Votes") {
      sort_by = "votes";
    } else if (e.target.name === "Votes asc") {
      sort_by = "votes";
      order = "asc";
    } else if (e.target.name === "New") {
      sort_by = "created_at";
      order = "desc";
    }

    this.props.fetchArticleComents(id, sort_by, order);
  };

  render() {
    return (
      <div className="dropdown">
        Sort comments by
        <button className="dropbtn">{this.state.sort_by} ▼</button>
        <div
          id="myDropdown"
          className="dropdown-content"
          onClick={this.dropdownClicked}
        >
          <button name="Votes">Votes</button>
          <button name="Votes asc">Votes asc</button>
          <button name="Old">Old </button>
          <button name="New">New </button>
        </div>
      </div>
    );
  }
}

export default CommentDropdown;
