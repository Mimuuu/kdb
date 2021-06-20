import { User } from "../types";
import styles from "./UsersList.module.scss";

interface Props {
  users: User[];
}

function UsersList({ users }: Props) {
  if (!users.length) return <p className={styles.empty}>No users found</p>;

  return (
    <div className={styles.container}>
      {/* {users.map(u => <UserCard key={u.id} u={u} />)} */}
      {users.map(u => <p key={u.id}>{u.name}</p>)}
    </div>
  );
}

export default UsersList;
