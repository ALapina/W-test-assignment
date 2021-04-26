// Router
import { Link } from "react-router-dom";
// Icons
import { AiFillPlusCircle } from "react-icons/ai";
//styles
import "./CreateNewUserButton.scss";
// multi language react-i18next
import { useTranslation } from "react-i18next";

const CreateNewUserButton = () => {
  const { t } = useTranslation();
  return (
    <Link to="/create-new-user" className="create-new-user-button">
      <AiFillPlusCircle className="plus-icon" />
      <span className="create-new-user-button__text">
        {t("create-new-user-button")}
      </span>
    </Link>
  );
};

export default CreateNewUserButton;
