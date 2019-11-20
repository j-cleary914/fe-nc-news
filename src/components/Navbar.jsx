import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <ul className="navbarUl">
      <Link to="/">
        <li className="navbarLi">
          <button name="home" className="navbarButton">
            Home
          </button>
        </li>
      </Link>
      <Link to="/articles/coding">
        <li className="navbarLi">
          <button name="coding" className="navbarButton">
            Coding
          </button>
        </li>
      </Link>
      <Link to="/articles/cooking">
        <li className="navbarLi">
          <button name="cooking" className="navbarButton">
            Cooking
          </button>
        </li>
      </Link>
      <Link to="/articles/football">
        <li className="navbarLi">
          <button name="football" className="navbarButton">
            Football
          </button>
        </li>
      </Link>
    </ul>
  );
};

export default Navbar;
