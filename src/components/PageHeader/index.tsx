//components
import CreateNewUserButton from "../CreateNewUserButton";
// styles
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
