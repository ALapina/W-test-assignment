import { useState, useEffect } from "react";

// Router
import { Link } from "react-router-dom";

//components
import PageHeader from "../PageHeader";

// Icons
import { RiArrowRightSLine } from "react-icons/ri";

// Styles
import "./UsersList.scss";

type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const UsersList = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  async function fetchUsers() {
    const response = await fetch("https://reqres.in/api/users?per_page=12");
    const json = await response.json();
    setUsers(json.data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main>
      <div className="wrapper">
        <PageHeader title={"Users List"} showButton={true} />

        <div className="users-list">
          {users.map((user) => (
            <Link
              to={`/user/${user.id}`}
              className="users-list__user"
              key={user.id}
            >
              <span className="users-list__name">
                {user.first_name} {user.last_name}
              </span>
              <RiArrowRightSLine />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default UsersList;
