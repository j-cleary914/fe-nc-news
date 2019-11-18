import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ArticleList path="articles" />
        <Article path="articles/:article_id" />
      </Router>
    </div>
  );
}

export default App;
