import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//components
import PageHeader from "../PageHeader";

//styles
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

const UserDetails = () => {
  const [user, setUser] = useState({} as UserType);
  let { id } = useParams<RouteParams>();

  async function fetchUsers(id: string) {
    const response = await fetch(`https://reqres.in/api/users/${id}`);
    const json = await response.json();
    setUser(json.data);
  }

  useEffect(() => {
    fetchUsers(id);
  }, [id]);

  console.log(user);

  return (
    <div className="wrapper">
      <PageHeader title={"User Details"} showButton={true} />
      <div className="user-details">
        <img src={user.avatar} alt={user?.first_name} />
        <p>{user.first_name}</p>
        <p>{user.last_name}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserDetails;
