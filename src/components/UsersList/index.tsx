import { useState, useEffect } from "react";
// Router
import { Link } from "react-router-dom";
// Icons
import { RiArrowRightSLine } from "react-icons/ri";
// Styles
import "./UsersList.scss";
// multi language react-i18next
import { useTranslation } from "react-i18next";
//components
import PageHeader from "../PageHeader";
import Pagination from "../Pagination";

import { fetchUsers } from "../../utils";

type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type FetchedUserListDataType = {
  data: [];
  page: number;
  total_pages: number;
};

const UsersList = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { t } = useTranslation();

  useEffect(() => {
    fetchUsers(`https://reqres.in/api/users?page=${currentPage}`)
      .then((json: FetchedUserListDataType) => {
        setUsers(json.data);
        setCurrentPage(json.page);
        setTotalPages(json.total_pages);
      })
      .catch((error) => console.error(error));
  }, [currentPage]);

  return (
    <main>
      <div className="wrapper">
        <PageHeader title={t("page-headers.part1")} showButton={true} />
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
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </main>
  );
};

export default UsersList;
