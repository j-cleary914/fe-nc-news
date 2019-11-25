import React, { Component } from "react";
import * as api from "../api";
import ArticleList from "./ArticleList";
import ErrorShower from "./ErrorShower";
import styles from "./UserProfile.module.css";

class UserProfile extends Component {
  state = { user: {}, isLoading: true, err: null };

  fetchUser = user => {
    api
      .getUser(user)
      .then(user => {
        this.setState({ user, isLoading: false });
      })
      .catch(err => {
        this.setState({ err });
      });
  };

  componentDidMount = () => {
    this.fetchUser(this.props.user);
  };
  render() {
    const { user, isLoading, err } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (err) return <ErrorShower err={this.state.err} />;
    return (
      <div>
        <h1 className={styles.user}>{user.username}</h1>
        <img src={user.avatar_url} alt="a user avatar" className={styles.img} />
        <h2>Articles posted by {user.username}: </h2>
        <ArticleList user={user.username} />
      </div>
    );
  }
}

export default UserProfile;
