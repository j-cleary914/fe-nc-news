import React, { Component } from "react";
import * as api from "../api";
import ArticleList from "./ArticleList";

class UserProfile extends Component {
  state = { user: {} };

  fetchUser = user => {
    api.getUser(user).then(user => this.setState({ user }));
  };

  componentDidMount = () => {
    this.fetchUser(this.props.user);
  };
  render() {
    return (
      <div>
        <p>{this.state.user.username}</p>
        <img src={this.state.user.avatar_url} alt="a user avatar" />
        <ArticleList user={this.props.user} />
      </div>
    );
  }
}

export default UserProfile;
