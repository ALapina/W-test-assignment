import React from "react";

// Router
import { Link } from "react-router-dom";

// Icons
import { AiFillPlusCircle } from "react-icons/ai";

//styles
import './CreateNewUserButton.scss';

const CreateNewUserButton = () => {
  return (
      <Link to="/create-new-user">
        <button className="create-new-user-button">
          <AiFillPlusCircle className="plus-icon" />
          Create New User
        </button>
      </Link>
  );
};

export default CreateNewUserButton;
