import React from "react";
import ArticleList from "./ArticleList";

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to NC news! </h1>
      <h3>
        This is a mock news website that has been made using react and styled
        with vanilla css. While there is no 'real' login or authentication
        functionality, you can 'switch logged in user', allowing you to vote, post and delete comments! Please feel free to browse this website and test out its functionality :)
      </h3>
      <ArticleList />
    </div>
  );
};

export default Homepage;
