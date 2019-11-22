import React from "react";

const ArticleDropdown = props => {
  return (
    <div className="dropdown">
      Sort articles by
      <button className="dropbtn">{props.sort_by} ▼</button>
      <div
        id="myDropdown"
        className="dropdown-content"
        onClick={props.dropdownClicked}
      >
        <button name="Votes">Votes</button>
        <button name="Votes asc">Votes asc</button>
        <button name="Old">Old</button>
        <button name="New">New</button>
        <button name="Most comments">Most comments</button>
        <button name="Least comments">Least comments</button>
      </div>
    </div>
  );
};

export default ArticleDropdown;
