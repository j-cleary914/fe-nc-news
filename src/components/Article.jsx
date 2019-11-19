import React, { Component } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";

class Article extends Component {
  state = {
    article: {},
    comments: [],
    sort_by: "New",
    input: "feel free to change me"
  };

  fetchArticle = () => {
    api.getArticle(this.props.article_id).then(article => {
      this.setState({ article });
    });
  };

  fetchArticleComents = (id, sort_by, order) => {
    api.getArticleComments(id, sort_by, order).then(comments => {
      this.setState({ comments });
    });
  };

  componentDidMount() {
    this.fetchArticle();
    this.fetchArticleComents(this.props.article_id);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.input);
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
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

    this.fetchArticleComents(id, sort_by, order);
  };

  render() {
    const comments = this.state.comments;
    const {
      title,
      author,
      body,
      comment_count,
      created_at,
      topic,
      votes,
      article_id
    } = this.state.article;

    console.log("rendering!!");
    return (
      <div className="GenericWrapper">
        {" "}
        <div className="article">
          <h1>{title}</h1>{" "}
          <h2>
            {votes} {author} {created_at}{" "}
          </h2>
          <p>{body}</p>{" "}
        </div>
        <div className="dropdown">
          Sort comments by
          <button className="dropbtn">{this.state.sort_by} ▼</button>
          <div
            id="myDropdown"
            className="dropdown-content"
            onClick={this.dropdownClicked}
          >
            <a name="Votes">Votes</a>
            <a name="Votes asc">Votes asc</a>
            <a name="Old">Old </a>
            <a name="New">New </a>
          </div>
        </div>
        <div>
          <textarea
            rows="4"
            cols="50"
            value={this.state.input}
            onChange={this.handleChange}
          ></textarea>
          <button onClick={this.handleSubmit}> Submit Comment</button>
        </div>
        <ul>
          {comments.map(comment => {
            return (
              <CommentCard
                key={comment.comment_id}
                className="Header"
                comment_id={comment.comment_id}
                votes={comment.votes}
                created_at={comment.created_at}
                author={comment.author}
                body={comment.body}
                author={comment.author}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Article;
