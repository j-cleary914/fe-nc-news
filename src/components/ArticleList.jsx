import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";
import ArticleDropdown from "./ArticleDropdown";
import ErrorShower from "./ErrorShower";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null
  };

  fetchArticles = (author, topic, sort_by, order) => {
    api
      .getArticles(this.props.user, this.props.topic, sort_by, order)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount() {
    this.fetchArticles(this.props.topic);
  }

  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
      this.fetchArticles(this.props.topic);
    }
  }

  render() {
    const articles = this.state.articles;
    // console.log(this.state.articles);

    if (this.state.isLoading) return <p>Loading...</p>;
    if (this.state.err) return <ErrorShower />;
    return (
      <div>
        <ArticleDropdown
          fetchArticles={this.fetchArticles}
          user={this.props.user}
        />
        <ul className="articleListLi">
          {articles.map(article => {
            //console.log(article.comment_count);
            return (
              <ArticleCard
                key={article.article_id}
                title={article.title}
                created_at={article.created_at}
                comment_count={article.comment_count}
                votes={article.votes}
                author={article.author}
                topic={article.topic}
                id={article.article_id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ArticleList;
