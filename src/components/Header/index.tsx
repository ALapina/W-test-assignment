// router
import { Link } from "react-router-dom";
// styles
import "./Header.scss";
// components
import SwitchLanguagesButtons from "../SwitchLanguagesButtons";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">
          <h1>Fetch them all</h1>
        </Link>
        <SwitchLanguagesButtons />
      </div>
    </header>
  );
};

export default Header;
