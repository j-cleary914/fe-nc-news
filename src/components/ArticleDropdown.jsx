import React, { Component } from "react";

class ArticleDropdown extends Component {
  state = {
    sort_by: "New"
  };

  dropdownClicked = e => {
    e.preventDefault();

    this.setState({ sort_by: e.target.name });

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
    } else if (e.target.name === "Most comments") {
      sort_by = "comment_count";
      order = "desc";
    } else if (e.target.name === "Least comments") {
      sort_by = "comment_count";
      order = "asc";
    }

    this.props.fetchArticles(this.props.user, this.props.topic, sort_by, order);
  };

  render() {
    return (
      <div className="dropdown">
        Sort articles by
        <button className="dropbtn">{this.state.sort_by} ▼</button>
        <div
          id="myDropdown"
          className="dropdown-content"
          onClick={this.dropdownClicked}
        >
          <button name="Votes">Votes</button>
          <button name="Votes asc">Votes asc</button>
          <button name="Old">Old</button>
          <button name="New">New</button>
          <button name="Most comments">Most comments</button>
          <button name="Least comments">Least comments</button>
        </div>
      </div>
    );
  }
}

export default ArticleDropdown;
