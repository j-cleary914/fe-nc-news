import React, { Component } from "react";
import * as api from "../api";
import CommentList from "./CommentList";
import timeSince from "../utils";
import { Link } from "@reach/router";

class Article extends Component {
  state = { article: {} };

  fetchArticle = () => {
    api.getArticle(this.props.article_id).then(article => {
      this.setState({ article });
    });
  };

  componentDidMount() {
    this.fetchArticle();
  }

  render() {
    console.log("rendering!!");
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
    let timeSinceString = timeSince(new Date(created_at));
    return (
      <div className="GenericWrapper">
        {" "}
        <div className="article">
          <h1>{title}</h1>{" "}
          <p>
            votes: {votes}, submitted {timeSinceString} by{" "}
            <Link to={`/users/${author}`}>{author}</Link> in{" "}
            <Link to={`/articles/${topic}`}>{topic}</Link>
          </p>
          <p>{body}</p>{" "}
        </div>
        <CommentList
          article_id={this.props.article_id}
          user={this.props.user}
        />
      </div>
    );
  }
}

export default Article;
