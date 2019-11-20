import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";
import ArticleDropdown from "./ArticleDropdown";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  fetchArticles = (author, topic, sort_by, order) => {
    console.log(author, topic, sort_by, order, "articleList.js");
    api
      .getArticles(this.props.user, this.props.topic, sort_by, order)
      .then(articles => {
        console.log(articles);
        this.setState({ articles, isLoading: false });
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
    return this.state.isLoading ? (
      <p>Loading...</p>
    ) : (
      <div>
        <ArticleDropdown fetchArticles={this.fetchArticles} user={this.props.user}/>
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
