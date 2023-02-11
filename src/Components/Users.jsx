import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import UserCard from "./UserCard";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <section>
      <h1>Users </h1>
      {users.map((user) => {
        return <UserCard key={user.username} user={user} />;
      })}
    </section>
  );
}
