import React, { Component } from "react";
import CommentCard from "./CommentCard";
import * as api from "../api";
import CommentDropdown from "./CommentDropdown";
import CommentInputter from "./CommentInputter";
import styles from "./CommentList.module.css";
import ErrorShower from "./ErrorShower";

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: null
  };

  removeComment = id => {
    api.deleteComment(id).then(response => {});
    this.setState(currentState => {
      let newComments = [...currentState.comments].filter(
        comment => comment.comment_id !== id
      );
      return { comments: newComments };
    });
  };

  fetchArticleComents = (id, sort_by, order) => {
    api
      .getArticleComments(id, sort_by, order)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  addComment = comment_body => {
    api
      .postComment(this.props.article_id, this.props.user, comment_body)
      .then(comment => {
        this.setState(currentState => {
          let newComments = [comment, ...currentState.comments];
          return { comments: newComments };
        });
      });
  };

  componentDidMount() {
    this.fetchArticleComents(this.props.article_id);
  }

  render() {
    const { comments, isLoading, err } = this.state;

    if (isLoading) return <p>Loading...</p>;
    if (err) return <ErrorShower err={this.state.err} />;
    return (
      <div className="randomClassName">
        <CommentDropdown
          article_id={this.props.article_id}
          fetchArticleComents={this.fetchArticleComents}
        />
        <CommentInputter
          article_id={this.props.article_id}
          addComment={this.addComment}
        />
        <ul className={styles.commentListUl}>
          {comments.map(comment => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment_id={comment.comment_id}
                votes={comment.votes}
                created_at={comment.created_at}
                author={comment.author}
                body={comment.body}
                user={this.props.user}
                removeComment={this.removeComment}
                topic={this.props.topic}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CommentList;
