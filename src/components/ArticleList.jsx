import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    api.getArticles().then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const articles = this.state.articles;
    // console.log(this.state.articles);
    return this.state.isLoading ? (
      <p>Loading...</p>
    ) : (
      <ul>
        {articles.map(article => {
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
    );
  }
}

export default ArticleList;
