import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";
import ArticleDropdown from "./ArticleDropdown";
import ErrorShower from "./ErrorShower";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null,
    sort_by: "New"
  };

  fetchArticles = (author, topic, sort_by, order) => {
    api
      .getArticles(this.props.user, this.props.topic, sort_by, order)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchArticles(this.props.topic);
  }

  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
      this.fetchArticles(this.props.topic);
      this.setState({ sort_by: "New" });
    }
  }

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

    this.fetchArticles(this.props.user, this.props.topic, sort_by, order);
  };

  render() {
    const { articles, isLoading, err } = this.state;

    if (isLoading) return <p>Loading...</p>;
    if (err) return <ErrorShower err={this.state.err} />;
    return (
      <div>
        <ArticleDropdown
          dropdownClicked={this.dropdownClicked}
          sort_by={this.state.sort_by}
        />
        <ul className="articleListLi">
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
      </div>
    );
  }
}

export default ArticleList;
