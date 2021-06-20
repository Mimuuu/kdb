import { User } from "../types";
import { Link } from "react-router-dom";
import styles from "./UserCard.module.scss";

interface Props {
  u: User;
}

function UserCard({ u }: Props) {
  return (
    <div className={styles.container}>
      <Link to={`/${u.id}`}>
        <p>{u.username} ({u.name})</p>
        <p>{u.email}</p>
      </Link>
      </div>
  )
}

export default UserCard;
