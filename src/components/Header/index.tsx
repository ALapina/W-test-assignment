import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header2 = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">
          <h1>Fetch them all</h1>
        </Link>
        <button>Language</button>
      </div>
    </header>
  );
};

export default Header2;
