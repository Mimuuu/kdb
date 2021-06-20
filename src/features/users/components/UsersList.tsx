import { User } from "../types";
import UserCard from "./UserCard";
import styles from "./UsersList.module.scss";

interface Props {
  users: User[];
}

function UsersList({ users }: Props) {
  if (!users.length) return <p className={styles.empty}>No users found</p>;

  return (
    <div className={styles.container}>
      {users.map(u => <UserCard key={u.id} u={u} />)}
    </div>
  );
}

export default UsersList;
