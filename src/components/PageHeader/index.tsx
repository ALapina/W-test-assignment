import React from "react";

import CreateNewUserButton from "../CreateNewUserButton";

import "./PageHeader.scss";

type PageHeaderProps = {
  title: string;
  showButton: boolean;
};

const PageHeader = ({ title, showButton }: PageHeaderProps) => {
  return (
    <div className="users-header">
      <h2>{title}</h2>
      {showButton && <CreateNewUserButton />}
    </div>
  );
};

export default PageHeader;
