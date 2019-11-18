import React, { Component } from "react";
import * as api from "../api";

class Article extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    api.getArticle(this.props.article_id).then(article => {
      this.setState({ article });
    });
  }

  render() {
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
    return (
      <div >
        <h1>{title}</h1>
        <h2>
          {votes} {author} {created_at}
        </h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default Article;
