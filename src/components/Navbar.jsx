import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <ul className="navbarUl">
      <Link to="/">
        <li className="navbarLi">
          <button name="home">Home</button>
        </li>
      </Link>
      <Link to="/articles/coding">
        <li className="navbarLi">
          <button name="coding">Coding</button>
        </li>
      </Link>
      <Link to="/articles/cooking">
        <li className="navbarLi">
          <button name="cooking">Cooking</button>
        </li>
      </Link>
      <Link to="/articles/football">
        <li className="navbarLi">
          <button name="football">Football</button>
        </li>
      </Link>
    </ul>
  );
};

export default Navbar;
