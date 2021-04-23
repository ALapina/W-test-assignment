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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  // TODO: Вынести в utilitis! Использовать axios можно. Возвращать просто json
  async function fetchUsers(currentPage: number) {
    const response = await fetch(
      `https://reqres.in/api/users?page=${currentPage}`
    );
    const json = await response.json();
    setUsers(json.data);
    setCurrentPage(json.page);
    setTotalPages(json.total_pages);
  }

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const arrayTotalPages: Array<number> = [];

  for (let i = 1; i <= totalPages; i++) {
    arrayTotalPages.push(i);
  }

  return (
    <main>
      <div className="wrapper">
        <PageHeader title={"Users List"} showButton={true} />

        <div className="users-list">
          {/* {isLoading && <h2>Loading...</h2>} */}
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
      {/* TODO: Пагинацию в отдельный компонент */}
      <div>
        <ul className="pagination">
          {arrayTotalPages.map((pageNumber: number) => (
            <li key={pageNumber}>
              <button onClick={() => setCurrentPage(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default UsersList;
