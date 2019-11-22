import React, { Component } from "react";
import * as api from "../api";
import CommentList from "./CommentList";
import timeSince from "../utils";
import { Link } from "@reach/router";
import Voter from "./Voter";
import styles from "./Article.module.css";
import ErrorShower from "./ErrorShower";

class Article extends Component {
  state = { article: {}, isLoading: true, err: null };

  fetchArticle = () => {
    api
      .getArticle(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        this.setState({ err, isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchArticle();
  }

  render() {
    const { err, isLoading } = this.state;
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

    if (isLoading) return <p>Loading...</p>;
    if (err) return <ErrorShower err={this.state.err}/>;
    return (
      <div className="GenericWrapper">
        {" "}
        <div className={styles.article}>
          <h1 className={styles.articleTitle}>{title}</h1>{" "}
          <p className={styles.articleBody}>{body}</p>{" "}
          <p className={styles.articleInfo}>
            submitted {timeSinceString} by{" "}
            <Link to={`/users/${author}`}>{author}</Link> in{" "}
            <Link to={`/articles/${topic}`}>{topic}</Link>
          </p>
          <Voter votes={votes} id={article_id} votingOn="article" />
        </div>
        <CommentList
          article_id={this.props.article_id}
          user={this.props.user}
          comment_count={comment_count}
          topic={topic}
        />
      </div>
    );
  }
}

export default Article;
