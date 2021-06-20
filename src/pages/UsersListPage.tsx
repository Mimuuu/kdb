import React from "react";
import { get } from "../app/utils/http";
import { User } from "../features/users/types";
import Spinner from "../features/_elements/Spinner";
import UsersList from "../features/users/components/UsersList";
import styles from "./UsersListPage.module.scss";

function UsersListPage() {
  const [users, setUsers] = React.useState<User[] | undefined>(undefined);
  const [error, setError] = React.useState<string>("");

  React.useEffect(() => {
    async function loadUsers() {
      const r = await get("https://jsonplaceholder.typicode.com/users");
      if (r.error) return setError("Failed to get the users list, please refresh or try again later");
      setUsers(r);
    }

    loadUsers();
  }, []);

  if (error) return <p className={styles.error}>{error}</p>

  if (!users) return <Spinner className={styles.spinner} />

  return <UsersList users={users} />;
}

export default UsersListPage;
