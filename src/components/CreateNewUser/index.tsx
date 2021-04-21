import React from "react";

//components
import PageHeader from "../PageHeader";

//styles
import "./CreateNewUser.scss";

const CreateNewUser = () => {
  return (
    <div className="wrapper">
      <PageHeader title={"Create New User"} showButton={false} />
    </div>
  );
};

export default CreateNewUser;
