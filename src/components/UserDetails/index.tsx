import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../PageHeader";
import { useTranslation } from "react-i18next";
import { fetchUsers } from "../../utils";
import "./UserDetails.scss";

type RouteParams = {
  id: string;
};

type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type FetchedUserDataType = {
  data: UserType;
};

const UserDetails = () => {
  const [user, setUser] = useState({} as UserType);
  let { id } = useParams<RouteParams>();
  const { t } = useTranslation();

  useEffect(() => {
    fetchUsers(`https://reqres.in/api/users/${id}`)
      .then((json: FetchedUserDataType) => {
        setUser(json.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="wrapper">
      <PageHeader title={t("page-headers.part2")} showButton={true} />
      <div className="user-details">
        <img
          className="user-details__avatar"
          src={user.avatar}
          alt={user.first_name}
        />
        <div className="dividing-line"></div>
        <p>
          {user.first_name} {user.last_name}
        </p>
        <p className="user-details__email">{user.email}</p>
      </div>
    </div>
  );
};

export default UserDetails;
