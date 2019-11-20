import React, { Component } from "react";
import CommentCard from "./CommentCard";
import * as api from "../api";
import CommentDropdown from "./CommentDropdown";
import CommentInputter from "./CommentInputter";

class CommentList extends Component {
  state = {
    comments: []
  };

  fetchArticleComents = (id, sort_by, order) => {
    api.getArticleComments(id, sort_by, order).then(comments => {
      this.setState({ comments });
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
    console.log("rendering!!");
    const comments = this.state.comments;

    return (
      <div>
        <CommentDropdown
          article_id={this.props.article_id}
          fetchArticleComents={this.fetchArticleComents}
        />
        <CommentInputter
          article_id={this.props.article_id}
          addComment={this.addComment}
        />
        <ul className="commentListUl">
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

export default CommentList;
