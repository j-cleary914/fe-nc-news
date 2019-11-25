import React, { Component } from "react";
import styles from "./Article.module.css";

class CommentDropdown extends Component {
  state = {
    sort_by: "New"
  };

  dropdownClicked = e => {
    e.preventDefault();

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

    this.props.fetchArticleComents(id, sort_by, order);
  };

  render() {
    return (
      <div className={styles.dropdown}>
        Sort {this.props.comment_count} comments by
        <button className={styles.dropbtn}>{this.state.sort_by} ▼</button>
        <div className={styles.dropdownContent} onClick={this.dropdownClicked}>
          <button name="Votes" className={styles.button}>
            Votes
          </button>
          <button name="Votes asc" className={styles.button}>
            Votes asc
          </button>
          <button name="Old" className={styles.button}>
            Old{" "}
          </button>
          <button name="New" className={styles.button}>
            New{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default CommentDropdown;
