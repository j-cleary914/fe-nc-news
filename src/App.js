import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import UserProfile from "./components/UserProfile";
import Homepage from "./components/Homepage";
import ErrorShower from "./components/ErrorShower";

class App extends Component {
  state = { user: "jessjelly" };

  userDropdownClicked = e => {
    e.preventDefault();
    this.setState({ user: e.target.name });
  };

  render() {
    return (
      <div className="App">
        <Header
          user={this.state.user}
          userDropdownClicked={this.userDropdownClicked}
        />
        <Router>
          <Homepage path="/" />
          <ArticleList path="articles/" />
          <ArticleList path="articles/coding" topic="coding" />
          <ArticleList path="articles/cooking" topic="cooking" />
          <ArticleList path="articles/football" topic="football" />
          <Article path="articles/:article_id" user={this.state.user} />
          <UserProfile path="users/:user" />
          <ErrorShower default />
        </Router>
      </div>
    );
  }
}

export default App;
