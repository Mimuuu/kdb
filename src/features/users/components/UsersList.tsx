import React from "react";
import { User } from "../types";
import UserCard from "./UserCard";
import styles from "./UsersList.module.scss";

interface Props {
  users: User[];
}

function UsersList({ users }: Props) {
  const [filter, setFilter] = React.useState<string>("");
  const [filteredUsers, setFilteredUsers] = React.useState<User[]>(users);

  React.useEffect(() => {
    if (filter) {
      const f = filter.toLowerCase();
      const filtered = users.filter(
        u => u.name.toLowerCase().includes(f) || u.username.toLowerCase().includes(f)
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  // eslint-disable-next-line
  // eslint want filteredUsers to be a dependancy, which would infinite loop since we update it inside the effect
  }, [filter])

  const filterUsers = (e: any) => setFilter(e.target.value); 

  if (!users.length) return <p className={styles.empty}>No users found</p>;

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <h4>filters</h4>
        <input
          type="text"
          onChange={filterUsers}
          placeholder="filter by username or username"
          data-testid="filter-input"
        />
      </div>

      <div data-testid="users-list">
        {filteredUsers.map(u => <UserCard key={u.id} u={u} />)}
      </div>
    </div>
  );
}

export default UsersList;
