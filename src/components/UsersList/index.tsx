import React, { useState, useEffect } from "react";

// Router
import { Link } from "react-router-dom";

// Icons
import { AiFillPlusCircle } from "react-icons/ai";
import { RiArrowRightSLine } from "react-icons/ri";

// Styles
import "./UsersList.scss";

const UsersList = (): JSX.Element => {
  const [users, setUsers] = useState([]);

  //Добавить try и catch - поработать над ts
  const fetchUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?per_page=12");
    const json = await response.json();
    setUsers(json.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users);

  return (
    <main>
      <div className="wrapper">
        <div className="users-header">
          <h2>Users</h2>
          <Link to="/create-new-user">
            <button className="create-new-user-button">
              <AiFillPlusCircle className="plus-icon" />
              Create New User
            </button>
          </Link>
        </div>

        <div className="users-list">
          <Link to="/user">
            <a href="/user" className="users-list__user">
              <span className="users-list__name">paul rudd1</span>
              <RiArrowRightSLine />
            </a>
          </Link>
          <Link to="/user">
            <a href="/user" className="users-list__user">
              <span className="users-list__name">paul rudd1</span>
              <RiArrowRightSLine />
            </a>
          </Link>
          <Link to="/user">
            <a href="/user" className="users-list__user">
              <span className="users-list__name">paul rudd1</span>
              <RiArrowRightSLine />
            </a>
          </Link>
          <Link to="/user">
            <a href="/user" className="users-list__user">
              <span className="users-list__name">paul rudd1</span>
              <RiArrowRightSLine />
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default UsersList;
