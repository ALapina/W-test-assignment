import React from "react";
import "./Header.scss";

const Header2 = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1>Fetch them all</h1>
        <button>Language</button>
      </div>
    </header>
  );
};

export default Header2;
